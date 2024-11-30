import { PartDTO } from "../dto/part-dto";
import { Injectable } from "@nestjs/common";
import partSchema from "../validators/schema-part.validator";
import { PartEntity } from "src/data/part/entities/part.entities";
import { ICreatePartUsecase } from "../interfaces/create-part.interface";
import { PartRepository } from "src/data/part/repository/part.repository";

@Injectable()
export class PostPartUseCase implements ICreatePartUsecase{
  constructor(
    private readonly partRepository: PartRepository,
  ) { }

  private calculateAdjustedValue(value: number, passOnFee: boolean): number {
    const tax = 0.1;
    const adjustedValue = passOnFee
      ? value + value * tax
      : value - value * tax;

    return Number(adjustedValue.toFixed(2));
  }

  async execute(data: PartDTO, merchantId: number): Promise<PartEntity> {
    await partSchema.validate(data, { abortEarly: false });

    const adjustedValue = this.calculateAdjustedValue(data.value, data.passOnFee);

    const newPart = this.partRepository.create({
      ...data,
      value: adjustedValue,
      id_merchant: merchantId
    } as PartEntity);

    await this.partRepository.save(newPart);
    return newPart;
    }
}

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

  async execute(data: PartDTO, merchantId: number): Promise<PartEntity> {
    console.log(data);
    await partSchema.validate(data, { abortEarly: false });

    const tax = 0.1;
    const adjustedValue = data.passOnFee 
      ? data.value + data.value * tax 
      : data.value - data.value * tax;

    const partWithTax = this.partRepository.create({
      ...data,
      value: adjustedValue,
      id_merchant: merchantId
    } as PartEntity);

    await this.partRepository.save(partWithTax);
    return partWithTax;
    }
}

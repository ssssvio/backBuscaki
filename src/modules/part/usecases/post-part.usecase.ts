import { Injectable } from "@nestjs/common";
import { ICreatePartUsecase } from "../interfaces/create-part.interface";
import { PartRepository } from "src/data/part/repository/part.repository";
import { PartEntity } from "src/data/part/entities/part.entities";
import { PartDTO } from "../dto/part-dto";


@Injectable()
export class PostPartUseCase implements ICreatePartUsecase{
  constructor(
    private readonly partRepository: PartRepository,
  ) { }

  async execute(data: PartDTO): Promise<PartEntity> {

    // propriedades que em data é: product, brand, amount, quality, color, value, passOnFee

    

    const soParaPararDeDarErro = new PartEntity();
    return soParaPararDeDarErro;
  }
}

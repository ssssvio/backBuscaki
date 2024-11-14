import { PartEntity } from "src/data/part/entities/part.entities";
import { CreatePartDTO } from "../dto/createPart-dto";

export interface ICreatePartUsecase {
  execute(data: CreatePartDTO): Promise<PartEntity>;
};
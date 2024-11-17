import { PartEntity } from "src/data/part/entities/part.entities";
import { PartDTO } from "../dto/part-dto";

export interface ICreatePartUsecase {
  execute(data: PartDTO, merchantId: number): Promise<PartEntity>;
};
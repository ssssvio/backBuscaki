import { Injectable } from "@nestjs/common";
import { CreatePartDTO } from "./dto/createPart-dto";
import { CreatePartResponse } from "./responses/create-part.interface";

@Injectable()
export abstract class IPartService {
  abstract createPart(data: CreatePartDTO): Promise<CreatePartResponse>;
}
import { Injectable, Request } from "@nestjs/common";
import { PartDTO } from "./dto/part-dto";
import { CreatePartResponse } from "./responses/create-part.interface";

@Injectable()
export abstract class IPartService {
  abstract createPart(data: PartDTO, merchantId: number): Promise<CreatePartResponse>;
}
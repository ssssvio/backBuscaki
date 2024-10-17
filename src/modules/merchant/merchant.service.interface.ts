import { Injectable } from "@nestjs/common";
import { MerchantDTO } from "./dto/merchant-dto";


@Injectable()
export abstract class IMerchantService {
  abstract createMerchant(data: MerchantDTO): Promise<any>;
}
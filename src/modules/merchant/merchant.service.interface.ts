import { Injectable } from "@nestjs/common";
import { MerchantDTO } from "./dto/merchant-dto";
import { MerchantResponse } from "./responses/merchant.response";

@Injectable()
export abstract class IMerchantService {
  abstract createMerchant(data: MerchantDTO): Promise<MerchantResponse>;
}
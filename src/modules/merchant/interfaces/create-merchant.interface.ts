import { MerchantEntity } from "src/data/merchant";
import { MerchantDTO } from "../dto/merchant-dto";

export interface ICreateMerchantUsecase {
  execute(data: MerchantDTO): Promise<MerchantEntity>;
};

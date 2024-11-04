import { CustomerEntity } from "src/data/customer";
import { MerchantEntity } from "src/data/merchant";

export type PartialUser = Partial<CustomerEntity> & Partial<MerchantEntity>;
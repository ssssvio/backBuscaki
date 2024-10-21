import { CustomerDTO } from "../dto/customer-dto";
import { CustomerEntity } from "src/data/customer/entities/customer.entities";

export interface ICreateCustomerUsecase {
  execute(data: CustomerDTO): Promise<CustomerEntity>;
};

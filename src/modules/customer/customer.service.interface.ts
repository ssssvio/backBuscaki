import { Injectable } from "@nestjs/common";
import { CustomerDTO } from "./dto/customer-dto";
import { CustomerResponse } from "./responses/customer.response";

@Injectable()
export abstract class ICustomerService {
  abstract createCustomer(data: CustomerDTO): Promise<CustomerResponse>;
};
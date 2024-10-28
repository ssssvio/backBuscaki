import { Injectable } from '@nestjs/common';
import { CustomerDTO } from './dto/customer-dto';
import { ICustomerService } from './customer.service.interface';
import { PostCustomerUseCase } from './usecases/post-customer.usecase';
import { CustomerEntity } from 'src/data/customer/entities/customer.entities';

@Injectable()
export class CustomerService implements ICustomerService {
  constructor(
    private readonly postCustomerUseCase: PostCustomerUseCase,
  ) { }

  createCustomer(data: CustomerDTO): Promise<CustomerEntity> {
    return this.postCustomerUseCase.execute(data);
  }
};
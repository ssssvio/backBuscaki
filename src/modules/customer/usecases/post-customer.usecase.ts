import { Injectable } from '@nestjs/common';
import { CustomerDTO } from '../dto/customer-dto';
import { CustomerEntity } from 'src/data/customer/entities/customer.entities';
import { ICreateCustomerUsecase } from '../interfaces/create-customer.interface';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';

@Injectable()
export class PostCustomerUseCase implements ICreateCustomerUsecase {
  constructor(private readonly customerRepository: CustomerRepository) { }

  async execute(data: CustomerDTO): Promise<CustomerEntity> {
    const customer = this.customerRepository.create(data);
    this.customerRepository.save(customer);
    return customer;
  }
};
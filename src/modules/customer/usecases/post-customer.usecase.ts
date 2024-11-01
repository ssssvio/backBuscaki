import * as bcryptjs from 'bcryptjs';
import { CustomerDTO } from '../dto/customer-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerEntity } from 'src/data/customer/entities/customer.entities';
import { ICreateCustomerUsecase } from '../interfaces/create-customer.interface';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';

@Injectable()
export class PostCustomerUseCase implements ICreateCustomerUsecase {
  constructor(private readonly customerRepository: CustomerRepository) { }

  async execute(data: CustomerDTO): Promise<CustomerEntity> {
    const user = await this.customerRepository.findByUsername(data.username);
    if (user) throw new NotFoundException(`User with username ${data.username} already exists!`);

    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newCustomer = this.customerRepository.create({
      ...data,
      password: hashedPassword,
    });

    await this.customerRepository.save(newCustomer);
    return newCustomer;
  }
};
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from '../entities/customer.entities';
import { CustomerDTO } from 'src/modules/customer/dto/customer-dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) { }

  create(data: CustomerDTO): CustomerEntity {
    return this.customerRepository.create(data);
  }

  findOne(id: number): Promise<CustomerEntity> {
    return this.customerRepository.findOne({ where: { id } });
  }

  findAll(): Promise<CustomerEntity[]> {
    return this.customerRepository.find();
  }

  findByUsername(username: string): Promise<CustomerEntity | null> {
    return this.customerRepository.findOne({ where: { username } });
  }

  async save(customer: CustomerEntity): Promise<void> {
    await this.customerRepository.save(customer);
  }

  async remove(customer: CustomerEntity): Promise<void> {
    await this.customerRepository.remove(customer);
  }
}
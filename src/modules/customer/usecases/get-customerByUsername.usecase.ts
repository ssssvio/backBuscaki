import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsecase } from 'src/common/interfaces/usecase.interface';
import { CustomerEntity } from 'src/data/customer';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';

@Injectable()
export class GetCustomerByUsernameUseCase implements IUsecase {
  constructor(private readonly customerRepository: CustomerRepository) { }

  async execute(username: string): Promise<CustomerEntity> {
    const user = await this.customerRepository.findByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }
};
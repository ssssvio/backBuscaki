import * as bcryptjs from 'bcryptjs';
import { CustomerDTO } from '../dto/customer-dto';
import { CustomerEntity } from 'src/data/customer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateCustomerUsecase } from '../interfaces/create-customer.interface';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';
import { UserValidationService } from 'src/shared/user-validation/user-validation.service';

@Injectable()
export class PostCustomerUseCase implements ICreateCustomerUsecase {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly userValidationService: UserValidationService
  ) { }

  async execute(data: CustomerDTO): Promise<CustomerEntity> {
    if (await this.userValidationService.isUsernameTaken(data.username))
        throw new NotFoundException(`User with username ${data.username} already exists!`);

    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newCustomer = this.customerRepository.create({
      ...data,
      password: hashedPassword,
    });

    await this.customerRepository.save(newCustomer);
    return newCustomer;
  }
};
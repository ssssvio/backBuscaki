import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDataModule } from 'src/data/customer';
import { CustomerController } from './customer.controller';
import { ICustomerService } from './customer.service.interface';
import { PostCustomerUseCase } from './usecases/post-customer.usecase';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';

@Module({
  imports: [CustomerDataModule],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    PostCustomerUseCase,
    CustomerRepository,
    {
      provide: ICustomerService,
      useClass: CustomerService,
    }
  ],
})
export class CustomerModule { }

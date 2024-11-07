import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDataModule } from 'src/data/customer';
import { CustomerController } from './customer.controller';
import { ICustomerService } from './customer.service.interface';
import { PostCustomerUseCase } from './usecases/post-customer.usecase';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';
import { GetCustomerByUsernameUseCase } from './usecases/get-customerByUsername.usecase';
import { UserValidationModule } from 'src/shared/user-validation/user-validation.module';

@Module({
  imports: [CustomerDataModule, UserValidationModule],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    PostCustomerUseCase,
    GetCustomerByUsernameUseCase,
    CustomerRepository,
    {
      provide: ICustomerService,
      useClass: CustomerService,
    } 
  ],
  exports: [GetCustomerByUsernameUseCase]
})
export class CustomerModule { }
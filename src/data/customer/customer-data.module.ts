import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entities';
import { CustomerRepository } from './repository/customer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  providers: [TypeOrmModule, CustomerRepository],
  exports: [CustomerRepository],
})
export class CustomerDataModule { }

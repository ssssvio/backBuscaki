import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entities';
import { CustomerRepository } from './repository/customer.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CustomerEntity])],
    controllers: [CustomerRepository],
    providers: [TypeOrmModule, CustomerRepository],
})
export class CustomerDataModule { }

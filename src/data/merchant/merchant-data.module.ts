import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantEntity } from './entities/merchant.entities';
import { MerchantRepository } from './repository/merchant.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MerchantEntity])],
  providers: [MerchantRepository],
  exports: [TypeOrmModule, MerchantRepository],
})
export class MerchantDataModule { }
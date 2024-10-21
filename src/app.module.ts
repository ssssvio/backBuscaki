import { CustomerModule } from './modules/customer/customer.module';
import { CustomerController } from './modules/customer/customer.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './infra/config/typeorm.factory';
import { MerchantModule } from './modules/merchant/merchant.module';
import { AuthModule } from './common/auth/auth.module';

@Module({
  imports: [
    CustomerModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig
    }),
    MerchantModule,
    AuthModule,
  ],
  controllers: [
    CustomerController,],
  providers: [],
})
export class AppModule { }

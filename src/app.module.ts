import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './common/auth/auth.module';
import { TypeOrmConfig } from './infra/config/typeorm.factory';
import { MerchantModule } from './modules/merchant/merchant.module';
import { CustomerModule } from './modules/customer/customer.module';
import { PartModule } from './modules/part/part.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig
    }),
    CustomerModule,
    MerchantModule,
    PartModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
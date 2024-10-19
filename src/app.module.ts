import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './infra/config/typeorm.factory';
import { MerchantModule } from './modules/merchant/merchant.module';
import { AuthModule } from './common/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig
    }),
    MerchantModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

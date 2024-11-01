import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/data/customer';
import { MerchantEntity } from 'src/data/merchant';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      logging: false,
      retryAttempts: 10,
      retryDelay: 25000,
      entities: [__dirname + '/**/*.entity{.ts,.js}', MerchantEntity, CustomerEntity],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: true,
      subscribers: [],
      extra: {
        trustServerCertificate: true,
      },
    };
  };
};
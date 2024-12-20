import { CustomerEntity } from 'src/data/customer';
import { MerchantEntity } from 'src/data/merchant';
import { PartEntity } from 'src/data/part';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}', MerchantEntity, CustomerEntity, PartEntity],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsRun: true,
  subscribers: [],
  extra: {
    trustServerCertificate: true,
  },
});
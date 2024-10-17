import { MerchantModule } from './modules/merchant/merchant.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MerchantModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }

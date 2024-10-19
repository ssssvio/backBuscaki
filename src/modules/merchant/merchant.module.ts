import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';

@Module({
    imports: [],
    controllers: [
        MerchantController,],
    providers: [
        MerchantService,],
})
export class MerchantModule { }

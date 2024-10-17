import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        MerchantController,],
    providers: [
        MerchantService,],
})
export class MerchantModule { }

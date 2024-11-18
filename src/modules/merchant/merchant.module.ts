import {  Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantDataModule } from 'src/data/merchant';
import { MerchantController } from './merchant.controller';
import { IMerchantService } from './merchant.service.interface';
import { PostMerchantUseCase } from './usecases/post-merchant.usecase';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';
import { GetMerchantByUsernameUseCase } from './usecases/get-merchantByUsername.usecase';
import { UserValidationModule } from 'src/shared/user-validation/user-validation.module';

@Module({
	imports: [MerchantDataModule, UserValidationModule],
	controllers: [MerchantController],
	providers: [
		MerchantService,
		MerchantRepository,
		PostMerchantUseCase,
		GetMerchantByUsernameUseCase,
		{
			provide: IMerchantService,
			useClass: MerchantService,
		}
	],
	exports: [GetMerchantByUsernameUseCase]
})
export class MerchantModule { }
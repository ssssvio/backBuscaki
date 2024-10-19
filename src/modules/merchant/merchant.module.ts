import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { MerchantDataModule } from 'src/data/merchant';
import { PostMerchantUseCase } from './usecases/post-merchant.usecase';
import { IMerchantService } from './merchant.service.interface';

@Module({
	imports: [MerchantDataModule],
	controllers: [MerchantController],
	providers: [
		MerchantService,
		PostMerchantUseCase,
		{
			provide: IMerchantService,
			useClass: MerchantService,
		}
	],
})
export class MerchantModule { }

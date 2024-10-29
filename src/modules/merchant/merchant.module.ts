import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantDataModule } from 'src/data/merchant';
import { MerchantController } from './merchant.controller';
import { IMerchantService } from './merchant.service.interface';
import { PostMerchantUseCase } from './usecases/post-merchant.usecase';

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

import { Module } from '@nestjs/common';
import { UserValidationService } from './user-validation.service';
import { MerchantDataModule } from 'src/data/merchant';
import { CustomerDataModule } from 'src/data/customer';

@Module({
  imports: [MerchantDataModule, CustomerDataModule],
  providers: [UserValidationService],
  exports: [UserValidationService],
})
export class UserValidationModule {}
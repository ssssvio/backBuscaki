import { Injectable } from '@nestjs/common';
import { MerchantDTO } from './dto/merchant-dto';
import { MerchantEntity } from 'src/data/merchant';
import { IMerchantService } from './merchant.service.interface';
import { PostMerchantUseCase } from './usecases/post-merchant.usecase';

@Injectable()
export class MerchantService implements IMerchantService {
  constructor(
    private readonly postMerchantUseCase: PostMerchantUseCase,
  ) { }

  createMerchant(data: MerchantDTO): Promise<MerchantEntity> {
    return this.postMerchantUseCase.execute(data);
  }
};
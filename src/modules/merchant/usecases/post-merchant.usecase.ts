import { Injectable } from '@nestjs/common';
import { MerchantDTO } from '../dto/merchant-dto';
import { MerchantEntity } from 'src/data/merchant';
import { IUsecase } from 'src/common/interfaces/usecase.interface';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';

@Injectable()
export class PostMerchantUseCase implements IUsecase {
  constructor(private readonly merchantRepository: MerchantRepository) { }

  async execute(data: MerchantDTO): Promise<MerchantEntity> {
    const merchant = this.merchantRepository.create(data);
    this.merchantRepository.save(merchant);
    return merchant;
  }
}
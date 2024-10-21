import { Injectable } from '@nestjs/common';
import { MerchantDTO } from '../dto/merchant-dto';
import { MerchantEntity } from 'src/data/merchant';
import { ICreateMerchantUsecase } from '../interfaces/create-merchant.interface';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';

@Injectable()
export class PostMerchantUseCase implements ICreateMerchantUsecase {
  constructor(private readonly merchantRepository: MerchantRepository) { }

  async execute(data: MerchantDTO): Promise<MerchantEntity> {
    const merchant = this.merchantRepository.create(data);
    this.merchantRepository.save(merchant);
    return merchant;
  }
};
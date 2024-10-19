import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsecase } from 'src/common/interfaces/usecase.interface';
import { MerchantEntity } from 'src/data/merchant';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';

@Injectable()
export class GetMerchantByUsernameUseCase implements IUsecase {
  constructor(private readonly merchantRepository: MerchantRepository) { }

  async execute(username: string): Promise<MerchantEntity> {
    const user = await this.merchantRepository.findByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }
};
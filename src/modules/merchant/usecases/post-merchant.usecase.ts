import * as bcryptjs from 'bcryptjs';
import { MerchantDTO } from '../dto/merchant-dto';
import { MerchantEntity } from 'src/data/merchant';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateMerchantUsecase } from '../interfaces/create-merchant.interface';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';

@Injectable()
export class PostMerchantUseCase implements ICreateMerchantUsecase {
  constructor(private readonly merchantRepository: MerchantRepository) { }

  async execute(data: MerchantDTO): Promise<MerchantEntity> {
    if (await this.merchantRepository.findByUsername(data.username))
      throw new NotFoundException(`User with username ${data.username} already exists!`);

    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newMerchant = this.merchantRepository.create({
      ...data,
      password: hashedPassword,
    });

    await this.merchantRepository.save(newMerchant);
    return newMerchant;
  }
};
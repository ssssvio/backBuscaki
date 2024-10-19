import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { MerchantEntity } from 'src/data/merchant';

@Injectable()
export class FindMerchantService {
  constructor(
    @InjectRepository(MerchantEntity)
    private readonly merchantRepository: Repository<MerchantEntity>,
  ) { }

  async findOneById(id: number): Promise<MerchantEntity> {
    const user = await this.merchantRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }
    return user;
  }

  async findByUsername(username: string): Promise<MerchantEntity | null> {
    return await this.merchantRepository.findOne({ where: { username } });
  }
};
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MerchantEntity } from '../entities/merchant.entities';
import { MerchantDTO } from 'src/modules/merchant/dto/merchant-dto';

@Injectable()
export class MerchantRepository {
  constructor(
    @InjectRepository(MerchantEntity)
    private readonly merchantRepository: Repository<MerchantEntity>,
  ) { }

  create(data: MerchantDTO): MerchantEntity {
    return this.merchantRepository.create(data);
  }

  findOne(id: number): Promise<MerchantEntity> {
    return this.merchantRepository.findOne({ where: { id } });
  }

  findAll(): Promise<MerchantEntity[]> {
    return this.merchantRepository.find();
  }

  findByUsername(username: string): Promise<MerchantEntity | null> {
    return this.merchantRepository.findOne({ where: { username } });
  }

  async save(merchant: MerchantEntity): Promise<void> {
    await this.merchantRepository.save(merchant);
  }

  async remove(merchant: MerchantEntity): Promise<void> {
    await this.merchantRepository.remove(merchant);
  }
}
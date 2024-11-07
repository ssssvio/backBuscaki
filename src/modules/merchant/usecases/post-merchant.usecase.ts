import * as bcryptjs from 'bcryptjs';
import { MerchantDTO } from '../dto/merchant-dto';
import { MerchantEntity } from 'src/data/merchant';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateMerchantUsecase } from '../interfaces/create-merchant.interface';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';
import { UserValidationService } from 'src/shared/user-validation/user-validation.service';


@Injectable()
export class PostMerchantUseCase implements ICreateMerchantUsecase {
  constructor(
    private readonly merchantRepository: MerchantRepository,
    private readonly userValidationService: UserValidationService
  ) { }

  async execute(data: MerchantDTO): Promise<MerchantEntity> {
    if (await this.userValidationService.isUsernameTaken(data.username))
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
import { Injectable } from '@nestjs/common';
import { IPartService } from './part.service.interface';
import { PartDTO } from './dto/part-dto';
import { PartEntity } from 'src/data/part/entities/part.entities';
import { PostPartUseCase } from './usecases/post-part.usecase';

@Injectable()
export class PartService implements IPartService {
  constructor(
    private readonly postPartUseCase: PostPartUseCase,
  ) { }

  createPart(data: PartDTO, merchantId: number): Promise<PartEntity> {
    return this.postPartUseCase.execute(data, merchantId);
  }
};
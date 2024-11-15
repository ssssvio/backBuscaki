import { Injectable } from '@nestjs/common';
import { IPartService } from './part.service.interface';
import { CreatePartDTO } from './dto/createPart-dto';
import { PartEntity } from 'src/data/part/entities/part.entities';
import { PostPartUseCase } from './usecases/post-part.usecase';

@Injectable()
export class PartService implements IPartService {
  constructor(
    private readonly postPartUseCase: PostPartUseCase,
  ) { }

  createPart(data: CreatePartDTO): Promise<PartEntity> {
    return this.postPartUseCase.execute(data);
  }
};
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PartEntity } from '../entities/part.entities';
import { CreatePartDTO } from 'src/modules/part/dto/createPart-dto';

@Injectable()
export class PartRepository {
  constructor(
    @InjectRepository(PartEntity)
    private readonly partRepository: Repository<PartEntity>,
  ) { }

  create(data: CreatePartDTO): PartEntity {
    return this.partRepository.create(data);
  }

  findOne(id: number): Promise<PartEntity> {
    return this.partRepository.findOne({ where: { id } });
  }

  findAll(): Promise<PartEntity[]> {
    return this.partRepository.find();
  }

  async save(part: PartEntity): Promise<void> {
    await this.partRepository.save(part);
  }

  async remove(part: PartEntity): Promise<void> {
    await this.partRepository.remove(part);
  }
}
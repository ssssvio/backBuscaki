import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartEntity } from './entities/part.entities';
import { PartRepository } from './repository/part.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PartEntity])],
  providers: [PartRepository],
  exports: [TypeOrmModule, PartRepository],
})
export class PartDataModule { }
import { Module } from '@nestjs/common';
import { PartDataModule } from 'src/data/part/part-data.module';
import { PartController } from './part.controller';
import { PartRepository } from 'src/data/part/repository/part.repository';
import { IPartService } from './part.service.interface';
import { PartService } from './part.service';
import { PostPartUseCase } from './usecases/post-part.usecase';

@Module({
  imports: [PartDataModule],
  controllers: [PartController],
  providers: [
    PartService,
    PartRepository,
    PostPartUseCase,
    {
      provide: IPartService,
      useClass: PartService,
    }
  ],
})
export class PartModule {}

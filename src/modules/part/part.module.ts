import { Module } from '@nestjs/common';
import { PartService } from './part.service';
import { PartController } from './part.controller';
import { IPartService } from './part.service.interface';
import { AuthModule } from 'src/common/auth/auth.module';
import { PostPartUseCase } from './usecases/post-part.usecase';
import { PartDataModule } from 'src/data/part/part-data.module';
import { PartRepository } from 'src/data/part/repository/part.repository';

@Module({
  imports: [PartDataModule, AuthModule],
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

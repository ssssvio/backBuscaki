import { PartDTO } from './dto/part-dto';
import { IPartService } from './part.service.interface';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Post, SetMetadata, UsePipes } from '@nestjs/common';

@ApiTags('Part')
@Controller('part')
export class PartController {
  constructor(private readonly service: IPartService) { }

  @Post()
  @UsePipes()
  
  @SetMetadata('role', 'Merchant')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Part created',
    type: PartDTO
  })
  @ApiBody({ type: PartDTO })
  async createPart(@Body() data: PartDTO) {
    return await this.service.createPart(data);
  }
};
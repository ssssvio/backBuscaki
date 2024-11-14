
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { CreatePartDTO } from './dto/createPart-dto';

@ApiTags('Part')
@Controller('part')
export class PartController {
  constructor(private readonly service: IPartService) { }

  @Post()
  @UsePipes()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Part created',
    type: CreatePartDTO
  })
  @ApiBody({ type: CreatePartDTO })
  async createPart(@Body() data: CreatePartDTO) {
    return await this.service.createPart(data);
  }
};
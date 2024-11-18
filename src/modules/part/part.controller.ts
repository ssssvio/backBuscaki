import { PartDTO } from './dto/part-dto';
import { IPartService } from './part.service.interface';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { RoleBasedGuard } from 'src/common/auth/jwt-roleBased.guard';
import { Body, Controller, HttpStatus, Post, Request, SetMetadata, UseGuards, UsePipes } from '@nestjs/common';

@ApiTags('Part')
@Controller('part')
export class PartController {
  constructor(private readonly service: IPartService) { }

  @Post()
  @UsePipes()
  // @SetMetadata('role', 'Merchant')
  // @UseGuards(RoleBasedGuard)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Part created',
    type: PartDTO
  })
  @ApiBody({ type: PartDTO })
  async createPart(@Body() data: PartDTO, @Request() req: any) {
    console.log(req.user);
    const merchantId = req.user.id;
    return await this.service.createPart(data, merchantId);
  }
};
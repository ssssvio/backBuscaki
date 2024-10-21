import { MerchantDTO } from './dto/merchant-dto';
import { IMerchantService } from './merchant.service.interface';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';

@ApiTags('Merchant')
@Controller('merchant')
export class MerchantController {
  constructor(private readonly service: IMerchantService) { }

  @Post()
  @UsePipes()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Merchant created',
    type: MerchantDTO
  })
  @ApiBody({ type: MerchantDTO })
  createMerchant(@Body() data: MerchantDTO) {
    this.service.createMerchant(data);
    return data;
  }
}

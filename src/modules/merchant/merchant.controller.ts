import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MerchantDTO } from './dto/merchant-dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { IMerchantService } from './merchant.service.interface';

@ApiTags('Merchant')
@Controller('merchant')
export class MerchantController {
  constructor(private readonly service: IMerchantService) { }

  @Post()
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

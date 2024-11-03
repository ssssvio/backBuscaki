import { CustomerDTO } from './dto/customer-dto';
import { ICustomerService } from './customer.service.interface';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly service: ICustomerService) { }

  @Post()
  @UsePipes()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Customer created',
    type: CustomerDTO
  })
  @ApiBody({ type: CustomerDTO })
  async createCustomer(@Body() data: CustomerDTO) {
    return await this.service.createCustomer(data);
  }
};

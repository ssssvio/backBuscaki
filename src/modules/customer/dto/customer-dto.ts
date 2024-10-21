import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CustomerDTO {
  @ApiProperty({ example: 'Customer' })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: '12345678' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
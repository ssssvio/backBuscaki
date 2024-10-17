import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MerchantDto {
  @ApiProperty({ example: 'merchant' })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: '12345678' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'your-key-pix' })
  @IsString()
  @IsNotEmpty()
  readonly keyPix: string;
}
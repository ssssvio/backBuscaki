import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class PartDTO {
  @ApiProperty({ example: 'Tela' })
  @IsString()
  @IsNotEmpty()
  readonly product: string;

  @ApiProperty({ example: '13 Pro Max' })
  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @ApiProperty({ example: 'Apple' })
  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty({ example: 'Original' })
  @IsString()
  @IsNotEmpty()
  readonly quality: string;

  @ApiProperty({ example: 'Preto', required: false, nullable: true })
  @IsString()
  @IsOptional()
  readonly color: string;

  @ApiProperty({ example: 199.99 })
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  readonly passOnFee: boolean;
}

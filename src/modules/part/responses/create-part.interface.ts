import { ApiProperty } from "@nestjs/swagger";

export class CreatePartResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  product: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  quality: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  merchant: number;
}
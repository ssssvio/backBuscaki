import { ApiProperty } from "@nestjs/swagger";

export class MerchantResponse {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  keyPix: string;
}
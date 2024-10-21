import { ApiProperty } from "@nestjs/swagger";

export class CustomerResponse {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
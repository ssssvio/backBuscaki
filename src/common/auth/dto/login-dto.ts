import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {
  @ApiProperty({ example: 'saviorezende' })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
import { AuthService } from './auth.service';
import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LoginDTO } from './dto/login-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 201, description: 'User successfully logged in' })
  @ApiBody({ type: LoginDTO })
  login(@Body() login: LoginDTO) {
    return this.authService.login(login);
  };
};
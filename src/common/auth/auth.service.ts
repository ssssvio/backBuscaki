import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login-dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FindMerchantService } from '../finders/find-merchant.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly findUsernameService: FindMerchantService,
  ) { }

  async login(login: LoginDTO) {
    const { username, password } = login;

    const user = await this.findUsernameService.findByUsername(username);
    if (!user || !(await bcryptjs.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials!');
    };

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  };

  async validateUser(payload: any): Promise<any> {
    return { userId: payload.sub, username: payload.username };
  };
};

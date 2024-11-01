import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login-dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetMerchantByUsernameUseCase } from 'src/modules/merchant/usecases/get-merchantByUsername.usecase';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly getMerchantByUsername: GetMerchantByUsernameUseCase,
  ) { }

  async login(login: LoginDTO) {
    const { username, password } = login;

    const user = await this.getMerchantByUsername.execute(username);
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

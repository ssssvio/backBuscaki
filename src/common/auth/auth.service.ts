import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login-dto';
import { PartialUser } from 'src/shared/user.types';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetMerchantByUsernameUseCase } from 'src/modules/merchant/usecases/get-merchantByUsername.usecase';
import { GetCustomerByUsernameUseCase } from 'src/modules/customer/usecases/get-customerByUsername.usecase';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly getMerchantByUsername: GetMerchantByUsernameUseCase,
    private readonly getCustomerByUsername: GetCustomerByUsernameUseCase,
  ) { }

  async login(login: LoginDTO) {
    const { username, password } = login;

    let user: PartialUser | null = await this.getMerchantByUsername.execute(username);
    if (!user) user = await this.getCustomerByUsername.execute(username);

    if (!user || !(await bcryptjs.compare(password, user.password)))
      throw new UnauthorizedException('Invalid credentials!');

    const role = user.keypix ? 'Merchant' : 'Customer';
    const payload = { username: user.username, sub: user.id, role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

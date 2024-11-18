import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { RoleBasedGuard } from './jwt-roleBased.guard';
import { MerchantModule } from 'src/modules/merchant/merchant.module';
import { CustomerModule } from 'src/modules/customer/customer.module';

@Module({
  imports: [
    CustomerModule,
    MerchantModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY_JWT,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RoleBasedGuard],
  exports: [AuthService],
})
export class AuthModule { }
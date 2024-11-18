import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from './interface/jwt-payload.interface';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class RoleBasedGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.get<string>('role', context.getHandler());
    if (!requiredRole) return true;

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) throw new UnauthorizedException('Missing token');

    const payload = this.jwtService.verify<JwtPayload>(token); 
    const validatedPayload = this.authService.validateUser(payload);

    if (validatedPayload.role !== requiredRole) {
      throw new UnauthorizedException('Insufficient permissions');
    }
    
    request.user = validatedPayload;
    return true;
  }
}
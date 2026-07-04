import { Injectable } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthStrategyFactory } from './strategies/factory/auth-strategy.factory';



@Injectable()
export class AuthService {
  constructor(
    private readonly authStrategyFactory: AuthStrategyFactory,
  ) {}

  async register(dto: RegisterDto) {
    const strategy = this.authStrategyFactory.getStrategy('email');

    return strategy.register(dto);
  }

  async login(dto: LoginDto) {
    const strategy = this.authStrategyFactory.getStrategy('email');

    return strategy.login(dto);
  }
}
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmailAuthStrategy } from './strategies/email.strategy';
import { AuthStrategyFactory } from './strategies/factory/auth-strategy.factory';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthStrategyFactory,
    EmailAuthStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
import { Injectable } from '@nestjs/common';
import { EmailAuthStrategy } from '../email.strategy';
import { AuthStrategy } from '../auth.strategy';



@Injectable()
export class AuthStrategyFactory {
  constructor(
    private readonly emailAuthStrategy: EmailAuthStrategy,
  ) {}

  getStrategy(provider: 'email'): AuthStrategy {
    switch (provider) {
      case 'email':
        return this.emailAuthStrategy;

      default:
        throw new Error('Authentication strategy not found.');
    }
  }
}
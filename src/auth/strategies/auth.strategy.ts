import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

export interface AuthStrategy {
  register(dto: RegisterDto): Promise<any>;

  login(dto: LoginDto): Promise<any>;
}
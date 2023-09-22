import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { SkipAuth } from 'src/decorators/public.decorator';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipAuth()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.signIn(loginDto.username, loginDto.password);
  }
}

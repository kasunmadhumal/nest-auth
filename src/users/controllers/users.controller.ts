import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Post('create-account')
  create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('find-one/:username')
  findOne(@Param() params: any): Promise<any> {
    return this.usersService.findOne(params.username);
  }

  @UseGuards(AuthGuard)
  @Get('find-all')
  findAll(): Promise<any> {
    return this.usersService.findAll();
  }
}

import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    const { username, password } = dto;
    const isExist = await this.userService.useExist(username, password);

    if (isExist) {
      throw new ForbiddenException('User already exist');
    }

    const user = await this.userService.createUser(dto);
    const { _id: id } = user;
    return this.authService.generateJwt({ id, username });
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signin(@Req() request: any) {
    // return request.user;
    return this.authService.generateJwt(request.user);
  }
}

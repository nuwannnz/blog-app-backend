import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './user/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService, private readonly userService:UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.loign(req.user);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req){
    console.log('me ');
    return req.user;
  }

  @Get('is-first-time')
  async getIsFirstTime(){
    const userCount = await this.userService.getUserCount();
    return {
      isFirstTime: userCount === 1,
    };
  }

  @Get('user')
  async getUser(){
    return await this.userService.getUser();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('auth/genadmin')
  async genarateAdmin(@Body() createAdminDto:UserDto){
    console.log('**************** userdto ', createAdminDto);
    return  await  this.userService.createUser(createAdminDto);
  }

}

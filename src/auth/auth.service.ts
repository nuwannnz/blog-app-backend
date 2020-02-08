import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(private readonly userService:UserService, private  readonly jwtService:JwtService) {


  }

  async validateUser(email:string, pwd:string):Promise<any>{
    const user = await this.userService.findOne(email);
    const isValid  = await bcrypt.compare(pwd,user.password);

    if(isValid){

      const {password, ...result} = user;
      return result;
    }
    return null;
  }

  async loign(user:any){
    const payload = {username: user.fname, sub:user.userId};
    return {
      token:this.jwtService.sign(payload)
    }
  }


}

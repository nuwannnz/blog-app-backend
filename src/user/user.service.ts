import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {
  }


  async findOne(email: string): Promise<User> {
    return await this.userRepo.findOne({ email: email });

  }


  async createUser(userDto: UserDto) {
    console.log('****************** got userDto', userDto);

    const user = new User();
    user.fName = userDto.fName;
    user.lName = userDto.lName;
    user.password = userDto.password;
    user.email = userDto.email;

    await this.userRepo.save(user);
    return user;
  }

  async getUserCount():Promise<number>{
    const users =  await this.userRepo.find();
    return users.length;
  }

}

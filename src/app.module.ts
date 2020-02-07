import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [UserModule, BlogModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password: '9896',
    database: 'blog-app',
    entities:["dist/**/*.entity{.ts, .js}"],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

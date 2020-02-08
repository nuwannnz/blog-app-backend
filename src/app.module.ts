import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogPostModule } from './blog-post/blog-post.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogPost } from './blog-post/blog-post.entity';
import { User } from './user/user.entity';

@Module({
  imports: [UserModule, BlogPostModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PWD || '9896',
    database: process.env.DB_DB_NAME || 'blog_app',
    entities:[User, BlogPost],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

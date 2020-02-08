import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './blog-post.entity';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';

@Module({
  imports:[TypeOrmModule.forFeature([BlogPost])],
  exports:[TypeOrmModule],
  providers: [BlogPostService],
  controllers: [BlogPostController]
})
export class BlogPostModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from './blog-post.entity';
import { Repository } from 'typeorm';
import { CreateBlogPostDto } from './create-blog-post.dto';

@Injectable()
export class BlogPostService {

  constructor(@InjectRepository(BlogPost) private readonly blogPostRepo:Repository<BlogPost>) {
  }

  async findAll(){
    return await this.blogPostRepo.find();
  }

  async find(postId:number){
    return await this.blogPostRepo.findOne(postId);
  }

  async create(blogPostDto:CreateBlogPostDto):Promise<BlogPost>{
    const newBlogPost = new BlogPost();
    newBlogPost.title = blogPostDto.title;
    newBlogPost.content = blogPostDto.content;

    await this.blogPostRepo.save(newBlogPost);
    return newBlogPost;
  }

  async update(blogPostDto:CreateBlogPostDto): Promise<BlogPost>{
    const postToUpdate = new BlogPost();
    postToUpdate.postId = blogPostDto.postId;
    postToUpdate.title = blogPostDto.title;
    postToUpdate.content = blogPostDto.content;

    await this.blogPostRepo.save(postToUpdate);
    return postToUpdate;
  }

  async delete(blogPostId:number){
    const postToDelete = await this.blogPostRepo.findOne(blogPostId);
    await this.blogPostRepo.remove(postToDelete);
    return {deleted:true};
  }
}

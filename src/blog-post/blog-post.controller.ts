import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostDto } from './create-blog-post.dto';

@Controller('blog-post')
export class BlogPostController {

  constructor(private readonly postService:BlogPostService) {
  }

  @Get()
  async findAllPosts(){
    return this.postService.findAll();
  }

  @Get(':id')
  async  findPost(@Param('id') postId){
    return this.postService.find(postId);
  }

  @Post()
  async createBlogPost(@Body() blogPostDto:CreateBlogPostDto){
    return this.postService.create(blogPostDto);
  }

  @Post('/update')
  async updateBlogPost(@Body() blogPostDto:CreateBlogPostDto){
    return this.postService.update(blogPostDto);
  }


  @Post('/delete')
  async deleteBlogPost(@Body() blogPostId:number){
    return this.postService.delete(blogPostId);
  }
}

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostDto } from './create-blog-post.dto';
import { AuthGuard } from '@nestjs/passport';

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


  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createBlogPost(@Body() blogPostDto:CreateBlogPostDto){
    return this.postService.create(blogPostDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/update')
  async updateBlogPost(@Body() blogPostDto:CreateBlogPostDto){
    return this.postService.update(blogPostDto);
  }


  @UseGuards(AuthGuard('jwt'))
  @Post('/delete')
  async deleteBlogPost(@Body() blogPostId:number){
    return this.postService.delete(blogPostId);
  }
}

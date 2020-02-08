import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class BlogPost{

  @PrimaryGeneratedColumn('uuid')
  postId:number;

  @CreateDateColumn()
  created_on:Date;

  @Column({type:'varchar'})
  title:string;

  @Column({type:'text'})
  content:string;


}
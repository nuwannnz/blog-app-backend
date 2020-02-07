import { Entity } from 'typeorm';
import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm/browser';
import * as bcrypt from 'bcrypt';


@Entity()
export class User{
  @PrimaryGeneratedColumn('uuid')
  userId:number;

  @Column('varchar', {length:40})
  fName:string;

  @Column('varchar', {length:40})
  lName:string;

  @Column('varchar', {length:50})
  email:string;

  @Column('varchar', {length:60})
  password:string;


  @BeforeInsert()
  async hashPassword(){
    this.password = bcrypt.hash(this.password, 10);
  }
}
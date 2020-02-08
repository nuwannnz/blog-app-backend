import { Entity, BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';
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
    this.password = await bcrypt.hash(this.password, 10);
  }
}
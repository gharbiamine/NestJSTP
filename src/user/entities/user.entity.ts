import { Cv } from 'src/cv/entities/cv.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({})
  username: string;
  @Column({})
  email: string;
  @Column({})
  password: string;
  @OneToMany(() => Cv, (cv) => cv.user)
  cvs: Cv[];
}

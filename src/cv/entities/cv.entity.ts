import { Type } from 'class-transformer';
import { isInt } from 'class-validator';
import { Skill } from 'src/skill/entities/skill.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cv')
export class Cv {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({})
  name: string;
  @Column({})
  firstname: string;
  @Column({})
  age: number;
  @Column({})
  cin: string;
  @Column({})
  job: string;
  @Column({})
  path: string;
  @ManyToOne(() => User, (user) => user.cvs)
  user: User;
  @ManyToMany(() => Skill, (skill) => skill.cvs)
  @JoinTable({
    name: 'cv_skill',
    joinColumn: { name: 'cv_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'skill_id', referencedColumnName: 'id' },
  })
  skills: Skill[];
}

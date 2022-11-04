import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Student } from '../students/student.entity';
import type { Teacher } from '../teachers/teacher.entity';

@Entity()
export class School {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany('Teacher', (teacher: Teacher) => teacher.school)
  teachers: Teacher[];

  @OneToMany('Student', (student: Student) => student.school)
  students: Student[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

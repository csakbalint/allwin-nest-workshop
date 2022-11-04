import { CrudValidationGroups } from '@nestjsx/crud';
import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { School } from '../schools/school.entity';
import { Teacher } from '../teachers/teacher.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ nullable: true })
  firstName: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ nullable: true })
  lastName: string;

  @Expose({ toPlainOnly: true })
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsNumber()
  @Max(100, { always: true })
  @Column({ nullable: true })
  age: number;

  @IsNotEmpty()
  @Type(() => Teacher)
  @ManyToOne('Teacher', (teacher: Teacher) => teacher.students, {
    nullable: true,
  })
  teacher: Teacher;

  @IsNotEmpty()
  @Type(() => School)
  @ManyToOne('School', (school: School) => school.students, { nullable: true })
  school: School;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

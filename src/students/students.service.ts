import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService extends TypeOrmCrudService<Student> {
  constructor(@InjectRepository(Student) repo: Repository<Student>) {
    super(repo);
  }
}

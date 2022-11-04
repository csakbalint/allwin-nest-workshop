import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService extends TypeOrmCrudService<Teacher> {
  constructor(@InjectRepository(Teacher) repo: Repository<Teacher>) {
    super(repo);
  }
}

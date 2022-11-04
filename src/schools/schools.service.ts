import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { School } from './school.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolsService extends TypeOrmCrudService<School> {
  constructor(@InjectRepository(School) repo: Repository<School>) {
    super(repo);
  }
}

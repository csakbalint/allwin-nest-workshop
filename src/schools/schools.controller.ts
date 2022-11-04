import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { School } from './school.entity';
import { SchoolsService } from './schools.service';

@Crud({
  model: {
    type: School,
  },
  routes: {
    exclude: ['createManyBase'],
    deleteOneBase: {
      returnDeleted: true,
    },
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    join: {
      teachers: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },
      'teachers.students': {
        eager: false,
        allow: ['firstName', 'lastName'],
      },
      students: {
        eager: false,
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
})
@Controller('schools')
export class SchoolsController implements CrudController<School> {
  constructor(public service: SchoolsService) {}
}

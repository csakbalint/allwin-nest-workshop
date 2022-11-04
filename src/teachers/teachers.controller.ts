import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Teacher } from './teacher.entity';
import { TeachersService } from './teachers.service';

@Crud({
  model: {
    type: Teacher,
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
      students: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },
      school: {
        eager: false,
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
})
@Controller('teachers')
export class TeachersController implements CrudController<Teacher> {
  constructor(public service: TeachersService) {}
}

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@Crud({
  model: {
    type: Student,
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
      teacher: {
        eager: false,
        exclude: ['createdAt', 'updatedAt'],
      },
      school: {
        eager: false,
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
})
@Controller('students')
export class StudentsController implements CrudController<Student> {
  constructor(public service: StudentsService) {}
}

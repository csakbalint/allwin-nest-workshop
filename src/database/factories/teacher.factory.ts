import { Factory } from '@concepta/typeorm-seeding';
import { Teacher } from 'src/teachers/teacher.entity';
import { faker } from '@faker-js/faker';

export class TeacherFactory extends Factory<Teacher> {
  protected async entity(): Promise<Teacher> {
    const teacher = new Teacher();
    teacher.id = faker.datatype.uuid();
    teacher.firstName = faker.name.firstName();
    teacher.lastName = faker.name.lastName();
    teacher.age = faker.datatype.number({ min: 30, max: 65 });
    return teacher;
  }
}

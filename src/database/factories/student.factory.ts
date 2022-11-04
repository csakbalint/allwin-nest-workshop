import { Factory } from '@concepta/typeorm-seeding';
import { Student } from 'src/students/student.entity';
import { faker } from '@faker-js/faker';

export class StudentFactory extends Factory<Student> {
  protected async entity(): Promise<Student> {
    const student = new Student();
    student.id = faker.datatype.uuid();
    student.firstName = faker.name.firstName();
    student.lastName = faker.name.lastName();
    student.age = faker.datatype.number({ min: 12, max: 18 });
    return student;
  }
}

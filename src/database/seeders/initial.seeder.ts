import { Seeder } from '@concepta/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { SchoolFactory, StudentFactory, TeacherFactory } from '../factories';

export class InitialSeeder extends Seeder {
  async run() {
    const schools = await this.factory(SchoolFactory).createMany(4);

    Promise.all(
      schools.map(async (school) => {
        const teachers = await this.factory(TeacherFactory).makeMany(5);
        const students = await this.factory(StudentFactory).makeMany(20);
        teachers.forEach((teacher) => {
          const min = faker.datatype.number({ min: 0, max: students.length });
          teacher.students = students.slice(
            min,
            faker.datatype.number({ min, max: students.length }),
          );
        });
        school.teachers = teachers;
        school.students = students;
        await this.factory(TeacherFactory).save(teachers);
        await this.factory(StudentFactory).save(students);
        await this.factory(SchoolFactory).save(schools);
      }),
    );
  }
}

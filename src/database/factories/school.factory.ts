import { Factory } from '@concepta/typeorm-seeding';
import { School } from 'src/schools/school.entity';
import { faker } from '@faker-js/faker';

export class SchoolFactory extends Factory<School> {
  protected async entity(): Promise<School> {
    const school = new School();
    school.id = faker.datatype.uuid();
    school.name = faker.company.name();
    school.address = `${faker.address.zipCode()} ${faker.address.city()}, ${faker.address.streetAddress()}`;
    return school;
  }
}

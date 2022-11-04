import { Module } from '@nestjs/common';
import { DatabaseModule } from './database';
import { SchoolsModule } from './schools';
import { StudentsModule } from './students';
import { TeachersModule } from './teachers';

@Module({
  imports: [DatabaseModule, SchoolsModule, TeachersModule, StudentsModule],
})
export class AppModule {}

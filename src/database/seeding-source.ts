import { SeedingSource } from '@concepta/typeorm-seeding';
import dataSource from './data-source';

module.exports = new SeedingSource({
  dataSource, // overridden if provided by CLI arg
  seeders: [],
  defaultSeeders: [],
});

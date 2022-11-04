import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('TYPEORM_HOST'),
  port: +configService.get('TYPEORM_PORT'),
  username: configService.get('TYPEORM_USERNAME'),
  password: configService.get('TYPEORM_PASSWORD'),
  database: configService.get('TYPEORM_DATABASE'),
  synchronize: configService.get('TYPEORM_AUTO_SCHEMA_SYNC'),
  entities: [configService.get('TYPEORM_ENTITIES') as string],
  migrations: [configService.get('TYPEORM_MIGRATIONS') as string],
  subscribers: [configService.get('TYPEORM_SUBSCRIBERS') as string],
});

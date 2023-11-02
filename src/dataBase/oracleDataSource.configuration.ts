/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

export const dataSource = new DataSource({
  type: 'oracle',
  host: config.get('DB_HOST', 'localhost'),
  port: Number(config.get('DB_PORT', 1521)),
  username: config.get('DB_USER_NAME', 'localhost'),
  password: config.get('DB_PASSWORD', 'localhost'),
  database: config.get('DB_NAME', 'localhost'),
  schema: config.get('DB_SCHEMA_NAME', 'localhost'),
  serviceName: config.get('DB_SERVICE_NAME', 'localhost'),
  entities: ['dist/**/*.model.js'],
  synchronize: false,
  migrations: ['./src/dataBase/migrations/**/*.ts'],
  migrationsTableName: 'migrations',
});

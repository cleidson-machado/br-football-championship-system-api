/* eslint-disable prettier/prettier */
import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

export const oracleDataSourceOptionsConfiguration: DataSourceOptions = {
  type: 'oracle',
  host: config.get('DB_HOST', 'localhost'),
  port: Number(config.get('DB_PORT', 1521)),
  username: config.get('DB_USER_NAME', 'root'),
  password: config.get('DB_PASSWORD', '123@pass'),
  database: config.get('DB_NAME', 'LOCALDB'),
  schema: config.get('DB_SCHEMA_NAME', 'XXX_NAME'),
  serviceName: config.get('DB_SERVICE_NAME', 'LOCALDB'),
  entities: ['./dist/**/*.entity.js'],
  synchronize: false,
  logging: ['query', 'error', 'schema'],
};

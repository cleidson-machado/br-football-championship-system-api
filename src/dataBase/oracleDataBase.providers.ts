/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const OracleDataBaseProviders = [
  {
    provide: 'DATA_SOURCE',

    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'oracle',
        host: process.env.HOST,
        port: Number(process.env.PORT),
        username: process.env.USER,
        password: process.env.PASSWD,
        database: process.env.CAIXADEV,
        schema: process.env.SCHEMA,
        serviceName: process.env.SERVICE,
        entities: ['./dist/**/*.entity.js'],
        synchronize: false,
        logging: ['query', 'error', 'schema'],
      });

      return dataSource.initialize();
    },
  },
];

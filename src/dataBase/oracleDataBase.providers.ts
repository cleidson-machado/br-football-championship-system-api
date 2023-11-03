/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const OracleDataBaseProviders = [
  {
    provide: 'DATA_SOURCE',

    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'oracle',
        host: '172.16.32.32',
        port: 1521,
        username: 'CLEIDSON.MACHADO',
        password: '@@!!pwd45brt',
        database: 'CAIXADEV',
        schema: 'DIP',
        serviceName: 'CAIXADEV',
        entities: ['./dist/**/*.entity.js'],
        synchronize: false,
        logging: ['query', 'error', 'schema'],
      });

      return dataSource.initialize();
    },
  },
];

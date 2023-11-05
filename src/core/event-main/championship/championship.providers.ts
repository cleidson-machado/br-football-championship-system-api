/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Championship } from './entities/championship.entity';

export const ChampionshipProviders = [
  {
    provide: 'CHAMPIONSHIP_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Championship),
    inject: ['DATA_SOURCE'],
  },
];

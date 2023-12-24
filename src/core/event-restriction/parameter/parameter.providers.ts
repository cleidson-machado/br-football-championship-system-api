/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Parameter } from './entities/parameter.entity';

export const ParameterProviders = [
  {
    provide: 'PARAMETER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Parameter),
    inject: ['DATA_SOURCE'],
  },
];

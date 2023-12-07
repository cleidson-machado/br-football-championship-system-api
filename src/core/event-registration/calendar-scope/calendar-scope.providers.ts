/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CalendarScope } from './entities/calendar-scope.entity';

export const CalendarScopeProviders = [
  {
    provide: 'CALENDARSCOPE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CalendarScope),
    inject: ['DATA_SOURCE'],
  },
];

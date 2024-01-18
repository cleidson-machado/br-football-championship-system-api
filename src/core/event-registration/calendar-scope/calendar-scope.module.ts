import { Module } from '@nestjs/common';
import { CalendarScopeService } from './calendar-scope.service';
import { CalendarScopeController } from './calendar-scope.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { CalendarScopeProviders } from './calendar-scope.providers';
import { CalendarScopeRepository } from './calendar-scope.repository';

@Module({
  imports: [oracleDataBaseModule],
  controllers: [CalendarScopeController],
  providers: [
    CalendarScopeService,
    ...CalendarScopeProviders,
    CalendarScopeRepository,
  ],
})
export class CalendarScopeModule {}

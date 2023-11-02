import { Module } from '@nestjs/common';
import { CalendarScopeService } from './calendar-scope.service';
import { CalendarScopeController } from './calendar-scope.controller';

@Module({
  controllers: [CalendarScopeController],
  providers: [CalendarScopeService],
})
export class CalendarScopeModule {}

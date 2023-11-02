import { Injectable } from '@nestjs/common';
import { CreateCalendarScopeDto } from './dto/create-calendar-scope.dto';
import { UpdateCalendarScopeDto } from './dto/update-calendar-scope.dto';

@Injectable()
export class CalendarScopeService {
  create(createCalendarScopeDto: CreateCalendarScopeDto) {
    return 'This action adds a new calendarScope';
  }

  findAll() {
    return `This action returns all calendarScope`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calendarScope`;
  }

  update(id: number, updateCalendarScopeDto: UpdateCalendarScopeDto) {
    return `This action updates a #${id} calendarScope`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendarScope`;
  }
}

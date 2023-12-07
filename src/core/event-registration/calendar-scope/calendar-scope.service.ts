import { Inject, Injectable } from '@nestjs/common';
import { CreateCalendarScopeDto } from './dto/create-calendar-scope.dto';
import { UpdateCalendarScopeDto } from './dto/update-calendar-scope.dto';
import { Repository } from 'typeorm';
import { CalendarScope } from './entities/calendar-scope.entity';

@Injectable()
export class CalendarScopeService {
  constructor(
    @Inject('CALENDARSCOPE_REPOSITORY')
    private calendarScopeRepository: Repository<CalendarScope>,
  ) {}

  create(payLoad: CreateCalendarScopeDto) {
    return this.calendarScopeRepository.save(payLoad);
  }

  findAll() {
    return this.calendarScopeRepository.find({
      relations: { championship: true },
    });
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

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalendarScopeService } from './calendar-scope.service';
import { CreateCalendarScopeDto } from './dto/create-calendar-scope.dto';
import { UpdateCalendarScopeDto } from './dto/update-calendar-scope.dto';

@Controller('calendar-scope')
export class CalendarScopeController {
  constructor(private readonly calendarScopeService: CalendarScopeService) {}

  @Post()
  create(@Body() createCalendarScopeDto: CreateCalendarScopeDto) {
    return this.calendarScopeService.create(createCalendarScopeDto);
  }

  @Get()
  findAll() {
    return this.calendarScopeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarScopeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalendarScopeDto: UpdateCalendarScopeDto) {
    return this.calendarScopeService.update(+id, updateCalendarScopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarScopeService.remove(+id);
  }
}

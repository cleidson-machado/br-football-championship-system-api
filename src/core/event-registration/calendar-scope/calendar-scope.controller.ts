/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CalendarScopeService } from './calendar-scope.service';
import { CreateCalendarScopeDto } from './dto/create-calendar-scope.dto';
import { UpdateCalendarScopeDto } from './dto/update-calendar-scope.dto';

@Controller('calendar-scope')
export class CalendarScopeController {
  constructor(private readonly calendarScopeService: CalendarScopeService) {}

  @Post()
  create(@Body() createCalendarScopeDto: CreateCalendarScopeDto) {
    return this.calendarScopeService.saveOne(createCalendarScopeDto);
  }

  @Get()
  findAll() {
    return this.calendarScopeService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarScopeService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCalendarScopeDto: UpdateCalendarScopeDto,
  ) {
    return this.calendarScopeService.setOne(id, updateCalendarScopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarScopeService.deleteOne(id);
  }
}

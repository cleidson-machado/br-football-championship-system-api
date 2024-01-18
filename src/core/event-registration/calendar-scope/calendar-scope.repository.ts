/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { ICalendarScope } from './calendar-scope.interface';
import { CalendarScope } from './entities/calendar-scope.entity';
import { Inject } from '@nestjs/common';
import { CreateCalendarScopeDto } from './dto/create-calendar-scope.dto';
import { UpdateCalendarScopeDto } from './dto/update-calendar-scope.dto';

export class CalendarScopeRepository
  extends Repository<CalendarScope>
  implements ICalendarScope<CalendarScope>
{
  constructor(
    @Inject('CALENDARSCOPE_REPOSITORY')
    private customRepository: Repository<CalendarScope>,
  ) {
    super(
      customRepository.target,
      customRepository.manager,
      customRepository.queryRunner,
    );
  }

  public async saveOne(payLoad: CreateCalendarScopeDto) {
    const newCalendar = this.create(payLoad);
    return await this.save(newCalendar);
  }

  public async getAll(): Promise<CalendarScope[]> {
    return await this.find({
      relations: { championship: true },
    });
  }

  public async getOne(id: string): Promise<CalendarScope | null> {
    return await this.findOne({
      where: { idCalendar: id },
    });
  }

  public async setOne(
    id: string,
    payLoad: UpdateCalendarScopeDto,
  ): Promise<void> {
    await this.update({ idCalendar: id }, payLoad);
  }

  public async deleteOne(id: string): Promise<void> {
    await this.delete({ idCalendar: id });
  }
}

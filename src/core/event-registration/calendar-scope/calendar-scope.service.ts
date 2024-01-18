import {
  Injectable,
  Logger,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateCalendarScopeDto } from './dto/create-calendar-scope.dto';
import { UpdateCalendarScopeDto } from './dto/update-calendar-scope.dto';
import { CalendarScopeRepository } from './calendar-scope.repository';
import { CalendarScope } from './entities/calendar-scope.entity';

@Injectable()
export class CalendarScopeService {
  private logger = new Logger(CalendarScopeService.name);
  constructor(private calendarScopeRepository: CalendarScopeRepository) {}

  public async saveOne(payLoad: CreateCalendarScopeDto) {
    try {
      return this.calendarScopeRepository.saveOne(payLoad);
    } catch (err) {
      throw new PreconditionFailedException(`Was an Error: ${err}`);
    }
  }

  public async getAll(): Promise<CreateCalendarScopeDto[]> {
    try {
      const calendars = await this.calendarScopeRepository.getAll();
      if (calendars?.length === 0) {
        throw new Error(
          `There is no data in the database table! NO DATA FOUND!.`,
        );
      }
      return calendars;
    } catch (err) {
      this.logger.log(
        `CalendarScopeService:getAll : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async getOne(id: string): Promise<CalendarScope | null> {
    try {
      const calendar = await this.calendarScopeRepository.getOne(id);
      if (!calendar) {
        throw new Error(
          `The CALENDAR with ID: ${id} was NOT FOUND on the Database!`,
        );
      }
      return calendar;
    } catch (err) {
      this.logger.log(
        `CalendarScopeService:getOne : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async setOne(
    id: string,
    payLoad: UpdateCalendarScopeDto,
  ): Promise<CalendarScope> {
    try {
      const calendar = await this.getOne(id);
      if (!calendar) {
        throw new Error(
          `The CALENDAR with ID: ${id} was NOT FOUND on the Database!`,
        );
      } else {
        await this.calendarScopeRepository.setOne(id, payLoad);
        return await this.getOne(id);
      }
    } catch (err) {
      this.logger.log(
        `CalendarScopeService:getOne : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async deleteOne(id: string) {
    try {
      const calendar = await this.getOne(id);
      if (!calendar) {
        throw new Error(
          `The CALENDAR with ID: ${id} was NOT FOUND on the Database!`,
        );
      } else {
        await this.calendarScopeRepository.deleteOne(id);
        return { code: 200, message: 'OK Removed!' };
      }
    } catch (err) {
      this.logger.log(
        `ParameterService:deleteOne : ${JSON.stringify(err.message)}`,
      );
      throw new PreconditionFailedException(`Was an Error: ${err}`);
    }
  }
}

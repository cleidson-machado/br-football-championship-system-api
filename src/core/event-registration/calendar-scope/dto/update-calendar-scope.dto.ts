/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarScopeDto } from './create-calendar-scope.dto';

export class UpdateCalendarScopeDto extends PartialType(
  CreateCalendarScopeDto,
) {
  competitionStartDay: Date;

  //competitionEndDay?: Date;

  //competitionMaxDaysSize?: number;

  //competitionAllowEventPreviousDates?: number;

  registrationEventStartDay: Date;

  //registrationEventEndDay?: Date;

  //registrationEventMaxDaysSize?: number;

  //registrationAllowPreviousDates?: number;

  championshipIdFk: string;
}

export class CreateCalendarScopeDto {
  competitionStartDay: Date;

  competitionEndDay?: Date;

  competitionMaxDaysSize?: number;

  competitionAllowEventPreviousDates?: number;

  registrationEventStartDay: Date;

  registrationEventEndDay?: Date;

  registrationEventMaxDaysSize?: number;

  registrationAllowPreviousDates?: number;

  championshipIdFk: string;
}

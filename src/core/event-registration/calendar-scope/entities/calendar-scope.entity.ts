import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'DIP', name: 'calendars' })
export class CalendarScope {
  @PrimaryGeneratedColumn('uuid')
  idCalendar: string;

  @Column({ nullable: false })
  competitionStartDay: Date;

  @Column({ nullable: false })
  competitionEndDay?: Date;

  @Column({ nullable: true })
  competitionMaxDaysSize?: number;

  @Column({ name: 'is_comp_days_mandatory', nullable: true, select: false })
  competitionAllowEventPreviousDates?: number;

  @Column({ nullable: false })
  registrationEventStartDay: Date;

  @Column({ nullable: false })
  registrationEventEndDay?: Date;

  @Column({ nullable: true })
  registrationEventMaxDaysSize?: number;

  @Column({ name: 'is_register_days_mandatory', nullable: true, select: false })
  registrationAllowPreviousDates?: number;

  @Column({ name: 'championship_id_fk', select: false })
  championshipIdFk: string;
}

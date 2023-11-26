import { Championship } from 'src/core/event-main/championship/entities/championship.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ select: true })
  championshipIdFk: string;

  //THIS IS A OUTGOING RELATIONSHIP..
  @ManyToOne(() => Championship, (championship) => championship.calendarScopes)
  @JoinColumn({ name: 'championshipIdFk', referencedColumnName: 'idChamp' })
  championship: Championship;
}

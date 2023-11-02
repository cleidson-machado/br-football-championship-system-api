import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Championship {
  @PrimaryGeneratedColumn('uuid')
  idChamp: string;

  @Column({ length: 255, unique: true })
  name: string;

  @Column({ nullable: false })
  startDay: Date;

  @Column({ nullable: false })
  locationState: string; //FK_RELATION?... NO LEAVE THAT WITH FRONT END!

  @Column({ nullable: false })
  locationCity: string; //FK_RELATION?... NO LEAVE THAT WITH FRONT END!

  @Column({ nullable: false })
  categoryAgeType: string; //ENUM

  @Column({ nullable: false })
  basicBiologicalGender: string; //ENUM

  @Column({ nullable: false })
  competitionModality: string; //ENUM

  @Column({ nullable: false })
  competitionFormat: string; //ENUM

  @Column({ name: 'team_size_number', nullable: false })
  teamSize: number;

  @Column({ name: 'group_size_number', nullable: false })
  groupSize: number;

  @Column({ nullable: false })
  finalStageType: string; //ENUM
}

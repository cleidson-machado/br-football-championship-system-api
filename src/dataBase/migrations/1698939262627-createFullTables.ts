/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFullTables1698939262627 implements MigrationInterface {
  name = 'CreateFullTables1698939262627';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "DIP"."championships" ("idChamp" varchar2(36), "name" varchar2(255) NOT NULL, "startDay" timestamp NOT NULL, "locationState" varchar2(255) NOT NULL, "locationCity" varchar2(255) NOT NULL, "categoryAgeType" varchar2(255) NOT NULL, "basicBiologicalGender" varchar2(255) NOT NULL, "competitionModality" varchar2(255) NOT NULL, "competitionFormat" varchar2(255) NOT NULL, "team_size_number" number NOT NULL, "group_size_number" number NOT NULL, "finalStageType" varchar2(255) NOT NULL, CONSTRAINT "UQ_4263776de1abe4910604a517c1f" UNIQUE ("name"), CONSTRAINT "PK_ddca61127438d80b53f1a65a09e" PRIMARY KEY ("idChamp"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "DIP"."calendars" ("idCalendar" varchar2(36), "competitionStartDay" timestamp NOT NULL, "competitionEndDay" timestamp NOT NULL, "competitionMaxDaysSize" number, "is_comp_days_mandatory" number, "registrationEventStartDay" timestamp NOT NULL, "registrationEventEndDay" timestamp NOT NULL, "registrationEventMaxDaysSize" number, "is_register_days_mandatory" number, "championship_id_fk" varchar2(255) NOT NULL, CONSTRAINT "PK_f2eab8cd6f0dab4d74549338228" PRIMARY KEY ("idCalendar"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "calendars"`);
    await queryRunner.query(`DROP TABLE "championships"`);
  }
}

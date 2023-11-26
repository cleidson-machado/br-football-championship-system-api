/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class ImplementRealationsChampToCalendar1699477465874
  implements MigrationInterface
{
  name = 'ImplementRealationsChampToCalendar1699477465874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" ADD "championshipIdFk" varchar2(36)`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."championships" ADD "categoryName" varchar2(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" ADD CONSTRAINT "FK_f9f90356333d2cb725bddc91d40" FOREIGN KEY ("championshipIdFk") REFERENCES "championships" ("idChamp")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" DROP CONSTRAINT "FK_f9f90356333d2cb725bddc91d40"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."championships" DROP COLUMN "categoryName"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" DROP COLUMN "championshipIdFk"`,
    );
  }
}

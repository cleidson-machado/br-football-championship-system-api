/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFullBasicRelations1699480417485
  implements MigrationInterface
{
  name = 'CreateFullBasicRelations1699480417485';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" RENAME COLUMN "championship_id_fk" TO "championshipIdFk"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."championships" ADD "categoryName" varchar2(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" DROP COLUMN "championshipIdFk"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" ADD "championshipIdFk" varchar2(36) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" ADD CONSTRAINT "FK_f9f90356333d2cb725bddc91d40" FOREIGN KEY ("championshipIdFk") REFERENCES "DIP"."championships" ("idChamp")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" DROP CONSTRAINT "FK_f9f90356333d2cb725bddc91d40"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" DROP COLUMN "championshipIdFk"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" ADD "championshipIdFk" varchar2(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."championships" DROP COLUMN "categoryName"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."calendars" RENAME COLUMN "championshipIdFk" TO "championship_id_fk"`,
    );
  }
}

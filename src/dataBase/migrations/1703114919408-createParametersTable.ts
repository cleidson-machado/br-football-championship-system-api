/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateParametersTable1703114919408 implements MigrationInterface {
  name = 'CreateParametersTable1703114919408';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "DIP"."parameters" ("idParameter" varchar2(36), "name" varchar2(255) NOT NULL, "description" varchar2(255) NOT NULL, "onAction" varchar2(255) NOT NULL, "isActive" number NOT NULL, "itIsTemporary" number NOT NULL, "dueDaysNumber" number NOT NULL, "pointValue" number, "applyToAllWithTheSameType" varchar2(255), "mathAction" varchar2(255), "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL, "entityIdentificatorId" varchar2(255) NOT NULL, CONSTRAINT "PK_ee0b92fbfa7e6f71eb8c5e0d63d" PRIMARY KEY ("idParameter"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "DIP"."parameters"`);
  }
}

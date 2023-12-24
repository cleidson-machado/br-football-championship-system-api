/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateParametersTable1703275393701 implements MigrationInterface {
  name = 'UpdateParametersTable1703275393701';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" DROP COLUMN "created_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" DROP COLUMN "updated_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" ADD "CREATED_AT" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" ADD "UPDATED_AT" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" MODIFY "isActive" number  NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" MODIFY "itIsTemporary" number  NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" MODIFY "dueDaysNumber" number  NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" MODIFY "dueDaysNumber" number  NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" MODIFY "itIsTemporary" number  NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" MODIFY "isActive" number  NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" DROP COLUMN "UPDATED_AT"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" DROP COLUMN "CREATED_AT"`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" ADD "updated_at" timestamp NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "DIP"."parameters" ADD "created_at" timestamp NOT NULL`,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1667564455810 implements MigrationInterface {
  name = 'initialMigration1667564455810';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "school" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "age" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "teacherId" uuid, "schoolId" uuid, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "teacher" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "schoolId" uuid, CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_f4481746c56ffa6cf77829a4bcc" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_c375f35160f921f4fab5f515d30" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "teacher" ADD CONSTRAINT "FK_0394b0bd47c97294d331bb5f960" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "teacher" DROP CONSTRAINT "FK_0394b0bd47c97294d331bb5f960"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_c375f35160f921f4fab5f515d30"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_f4481746c56ffa6cf77829a4bcc"`,
    );
    await queryRunner.query(`DROP TABLE "teacher"`);
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(`DROP TABLE "school"`);
  }
}

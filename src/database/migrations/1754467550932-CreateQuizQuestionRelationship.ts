import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateQuizQuestionRelationship1754467550932
  implements MigrationInterface
{
  name = 'CreateQuizQuestionRelationship1754467550932';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "questions" ADD "quizId" integer`);
    await queryRunner.query(
      `ALTER TABLE "questions" ADD CONSTRAINT "FK_35d54f06d12ea78d4842aed6b6d" FOREIGN KEY ("quizId") REFERENCES "quizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "questions" DROP CONSTRAINT "FK_35d54f06d12ea78d4842aed6b6d"`,
    );
    await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "quizId"`);
  }
}

import { MigrationInterface, QueryRunner, TableUnique } from 'typeorm';

export class EnforceUniqueOptions1754815889430 implements MigrationInterface {
  name = 'EnforceUniqueOptions1754815889430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createUniqueConstraint(
      'options',
      new TableUnique({
        name: 'UQ_options_text_questionId',
        columnNames: ['text', 'questionId'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropUniqueConstraint(
      'options',
      'UQ_options_text_questionId',
    );
  }
}

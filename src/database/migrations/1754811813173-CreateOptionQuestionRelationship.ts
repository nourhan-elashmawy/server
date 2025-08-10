import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateOptionQuestionRelationship1754811813173
  implements MigrationInterface
{
  name = 'CreateOptionQuestionRelationship1754811813173';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'options',
      new TableColumn({
        name: 'questionId',
        type: 'integer',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'options',
      new TableForeignKey({
        columnNames: ['questionId'],
        referencedTableName: 'questions',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('options', 'questionId');
    await queryRunner.dropColumn('options', 'questionId');
  }
}

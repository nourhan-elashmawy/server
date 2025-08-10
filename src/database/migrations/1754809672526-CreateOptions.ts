import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOptions1754809672526 implements MigrationInterface {
  name = 'CreateOptions1754809672526';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'text',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'isCorrect',
            type: 'boolean',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('options', true, true, true);
    // true, true, true: ifExists, cascade, dropForeignKeys
  }
}

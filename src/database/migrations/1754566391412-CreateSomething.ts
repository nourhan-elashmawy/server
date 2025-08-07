import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSomething1754566391412 implements MigrationInterface {
  name = 'CreateSomething1754566391412';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'something',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'question',
            type: 'text',
            isNullable: false,
          },
        ],
      }),
      true, // to skip creating if table aready exists
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('something', true, true, true);
    // true, true, true: ifExists, cascade, dropForeignKeys
  }
}

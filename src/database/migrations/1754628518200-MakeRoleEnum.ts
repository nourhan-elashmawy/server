import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MakeRoleEnum1754628518200 implements MigrationInterface {
  name = 'MakeRoleEnum1754628518200';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'role');
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'role',
        type: 'enum',
        enum: ['player', 'admin'],
        enumName: 'users_role_enum',
        isNullable: false,
        default: "'player'",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'role');
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'role',
        type: 'varchar',
        length: '50',
        isNullable: false,
        default: "'player'",
      }),
    );
  }
}

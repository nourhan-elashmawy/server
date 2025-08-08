import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRoleToUser1754622805382 implements MigrationInterface {
  name = 'AddRoleToUser1754622805382';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //   `ALTER TABLE "users" ADD "role" character varying NOT NULL DEFAULT 'player'`,
    // );
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    await queryRunner.dropColumn('users', 'role');
  }
}

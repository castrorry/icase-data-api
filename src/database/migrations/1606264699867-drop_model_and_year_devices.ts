import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class dropModelAndYearDevices1606264699867 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('devices', 'model');
    return await queryRunner.dropColumn('devices', 'year');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('devices', new TableColumn({
      name: 'model',
      type: 'varchar',
      isUnique: true
    }));
    return await queryRunner.addColumn('devices', new TableColumn({
      name: 'year',
      type: 'varchar'
    }));
  }

}

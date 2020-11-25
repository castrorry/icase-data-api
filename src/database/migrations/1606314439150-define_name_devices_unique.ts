import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class defineNameDevicesUnique1606314439150 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.changeColumn('devices', 'name', new TableColumn({
      name: 'name',
      type: 'varchar',
      isUnique: true
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.changeColumn('devices', 'name', new TableColumn({
      name: 'name',
      type: 'varchar'
    }));
  }

}

import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addLaunchedDevices1608752250300 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.addColumn('devices', new TableColumn({
      name: 'launched',
      type: 'int',
      default: 0
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropColumn('devices', 'launched');
  }
  
}

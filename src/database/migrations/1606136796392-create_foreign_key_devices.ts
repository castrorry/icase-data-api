import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class createForeignKeyDevices1606136796392 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('devices', 'brand');

    await queryRunner.addColumn('devices', new TableColumn({
      name: 'brand_id',
      type: 'integer',
      isNullable: true
    }));

    return await queryRunner.createForeignKey('devices', new TableForeignKey({
      name: 'DeviceBrand',
      columnNames: ['brand_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'device_brands',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('devices', 'DeviceBrand');
    await queryRunner.dropColumn('devices', 'brand_id');
    return await queryRunner.addColumn('devices', new TableColumn({
      name: 'brand',
      type: 'varchar'
    }));
  }

}

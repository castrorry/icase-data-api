import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProducts1605989383615 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'count',
          type: 'integer'
        },
        {
          name: 'price',
          type: 'decimal'
        },
        {
          name: 'stock_price',
          type: 'decimal'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'product_type_id',
          type: 'integer'
        },
        {
          name: 'category_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'TypeProduct',
          columnNames: ['product_type_id'],
          referencedTableName: 'product_types',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'CategoryProduct',
          columnNames: ['category_id'],
          referencedTableName: 'categories',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('products');
  }

}

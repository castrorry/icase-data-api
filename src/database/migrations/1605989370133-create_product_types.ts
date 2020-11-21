import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProductTypes1605989370133 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(new Table({
			name: 'product_types',
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
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'category_id',
          type: 'integer'
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
        }
      ],
      foreignKeys: [
        {
          name: 'product_type_category',
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
		return await queryRunner.dropTable('product_types');
	}

}

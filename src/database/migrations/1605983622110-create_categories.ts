import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCategories1605983622110 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(new Table({
			name: 'categories',
			columns: [
				{
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: 'name',
          type: 'varchar',
          isUnique: true
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
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable('cateogries');
	}

}

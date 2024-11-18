import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePartTable1731869515471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			queryRunner.query(`
				CREATE TABLE part (
					id INT PRIMARY KEY IDENTITY(1,1),
					product VARCHAR(255) NOT NULL,
					model VARCHAR(255) NOT NULL,
					brand VARCHAR(255) NOT NULL,
					amount BIGINT NOT NULL,
					quality VARCHAR(255) NOT NULL,
					color VARCHAR(255) NULL,
					value DECIMAL(10, 2) NOT NULL,
					passOnFee BIT NOT NULL DEFAULT 0,
					id_merchant INT NOT NULL
				);`
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			queryRunner.query(`DROP TABLE part;`);
    }

}

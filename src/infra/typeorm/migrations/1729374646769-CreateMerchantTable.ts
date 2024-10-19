import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMerchantTable1729374646769 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
            CREATE TABLE merchant (
                id INT PRIMARY KEY IDENTITY(1,1),
                username NVARCHAR(255) NOT NULL,
                password NVARCHAR(255) NOT NULL,
                keypix NVARCHAR(255) NOT NULL
            );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE merchant;`);
  }
}

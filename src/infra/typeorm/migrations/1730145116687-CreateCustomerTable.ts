import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomerTable1730145116687 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
      CREATE TABLE customer (
          id INT PRIMARY KEY IDENTITY(1,1),
          username NVARCHAR(255) NOT NULL,
          password NVARCHAR(255) NOT NULL,
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE customer;`);
  }
};

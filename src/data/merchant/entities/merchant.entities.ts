import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('merchant')
export class MerchantEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ type: "varchar", length: 255 })
  username: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "varchar", length: 255 })
  keypix: string;
};
import { MerchantEntity } from "src/data/merchant";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('part')
export class PartEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "bigint" })
  amount: number;

  @Column({ type: "varchar", length: 255 })
  mark: string;

  @Column({ type: "varchar", length: 255 })
  color: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  value: number;

  @Column({ type: "varchar", length: 255 })
  title: string;

  @ManyToOne(() => MerchantEntity, (merchant) => merchant.parts)
  @Column({ name: "id_merchant" })
  merchant: MerchantEntity;
}
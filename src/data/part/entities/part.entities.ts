import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('part')
export class PartEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ type: "varchar", length: 255 })
  product: string;

  @Column({ type: "varchar", length: 255 })
  model: string;

  @Column({ type: "varchar", length: 255 })
  brand: string;

  @Column({ type: "bigint" })
  amount: number;

  @Column({ type: "varchar", length: 255 })
  quality: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  color: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  value: number;

  @Column({ type: "bit", default: false })
  passOnFee: boolean;

  @Column({ type: "bigint" })
  id_merchant: number;
}
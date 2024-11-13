import { PartEntity } from "src/data/part/entities/part.entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => PartEntity, (part) => part.merchant)
  parts: PartEntity[];
};
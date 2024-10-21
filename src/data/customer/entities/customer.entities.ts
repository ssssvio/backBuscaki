import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ type: "varchar", length: 255 })
  username: string;

  @Column({ type: "varchar", length: 255 })
  password: string;
};
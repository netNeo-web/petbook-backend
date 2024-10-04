import { Entity, PrimaryGeneratedColumn, Column, Index  } from "typeorm";

@Entity()
export class Services {
  @PrimaryGeneratedColumn("uuid")
  @Index("id-idx")
  id: string;

  @Column()
  nombre: string;
}
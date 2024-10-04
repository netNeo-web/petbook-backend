import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn  } from "typeorm";
import { IsNotEmpty, Length } from "class-validator";
import { User } from "./Usuarios";

enum PetType {
    dog = 'perro',
    cat = 'gato'
}
@Entity()
export class Pet {
  @PrimaryGeneratedColumn("uuid")
  @Index("id-idx")
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.pets, { eager: true, cascade: true })
  @JoinColumn({ name: "user_id" })
  usuario: User;

  @Column()
  nombre: string;

  @Column({
    type: "enum",
    enum: PetType,
    default: PetType.dog
  })
  tipo: PetType;

  @Column()
  foto: string;
}

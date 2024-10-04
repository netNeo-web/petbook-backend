import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Index("id-idx")
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column({ name: 'email' })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email!: string;

  @Column()
  password: string;

  @Column()
  ciudad: string;

  @Column()
  descripcion: string;

  @Column()
  foto_perfil: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_actualizacion: Date;
}

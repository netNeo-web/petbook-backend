import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Services } from './Servicios';
import { Pet } from './Mascotas';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Index('id-idx')
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

  @JoinColumn()
  servicios: Services;

  @JoinColumn()
  pets: Pet;
}

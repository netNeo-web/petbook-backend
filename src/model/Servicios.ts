import { Entity, PrimaryGeneratedColumn, Column, Index, JoinColumn } from 'typeorm';
import { User } from './Usuarios';

@Entity()
export class Services {
  @PrimaryGeneratedColumn('uuid')
  @Index('id-idx')
  id: string;

  @Column()
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  ubicacion: string;

  @JoinColumn()
  usuarios: User;
}

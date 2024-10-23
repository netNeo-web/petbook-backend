import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from './Usuarios';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  @Index("id-idx")
  id: string;

  @ManyToOne(() => User, usuario => usuario.id)
  usuario_id: string;

  @ManyToOne(() => User, usuario => usuario.id)
  proveedor_id: string;

  @Column({ type: 'text' })
  comentario: string;

  @Column({ type: 'int', width: 1 })
  valoracion: number;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_creacion: Date;

}

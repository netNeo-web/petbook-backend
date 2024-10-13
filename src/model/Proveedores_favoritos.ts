import { Entity, ManyToOne, Index } from 'typeorm';
import { User } from './Usuarios';

@Entity()
export class FavoriteProviders {

  @ManyToOne(() => User, usuario => usuario.id)
  @Index("user_id-idx")
  usuario_id: User;

  @ManyToOne(() => User, usuario => usuario.id)
  @Index("provider_user_id-idx")
  proveedor_id: User;
}

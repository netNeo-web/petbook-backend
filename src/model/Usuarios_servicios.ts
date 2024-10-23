import { Entity, ManyToOne , Index} from "typeorm";
import { User } from './Usuarios';
import { Services } from "./Servicios";

@Entity()
export class UserServices {

  @ManyToOne(() => User, usuario => usuario.servicios)
  @Index("user_id-idx")
  usuario: User;

  @ManyToOne(() => Services, servicio => servicio.usuarios)
  @Index("service_user_id-idx")
  servicio: Services;
}

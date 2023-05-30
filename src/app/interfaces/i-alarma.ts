import {ITipoAlarma} from "./i-tipo-alarma";
import {IUsers} from "./i-users";
import {IPaciente} from "./i-paciente";
import {ITerminal} from "./i-terminal";

export interface IAlarma {
  id: number;
  estado_alarma: string;
  fecha_registro: Date;
  observaciones: string;
  resumen: string;
  id_tipo_alarma: ITipoAlarma;
  id_teleoperador: IUsers;
  id_paciente_ucr: IPaciente
  id_terminal: ITerminal

}

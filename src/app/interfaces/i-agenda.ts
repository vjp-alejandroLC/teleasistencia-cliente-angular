import {IPaciente} from "./i-paciente";
import {ITipoAgenda} from "./i-tipo-agenda";
import {IPersona} from "./i-persona";

export interface IAgenda {
  id: number;
  prioridad: any;
  id_paciente: any;
  id_tipo_agenda: any;
  id_persona: any;
  fecha_registro: Date;
  fecha_prevista: Date;
  fecha_resolucion: Date;
  observaciones: string;
}

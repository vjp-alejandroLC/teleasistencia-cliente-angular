import {IAgenda} from "../interfaces/i-agenda";
import {IPaciente} from "../interfaces/i-paciente";
import {ITipoAgenda} from "../interfaces/i-tipo-agenda";
import {IPersona} from "../interfaces/i-persona";

export class Agenda implements IAgenda {
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

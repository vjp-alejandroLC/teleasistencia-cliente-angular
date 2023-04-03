import {IPaciente} from "./i-paciente";
import {IPersona} from "./i-persona";

export interface IRelacionPacientePersona {
  id: number;
  tipo_relacion: string;
  tiene_llaves_vivienda: boolean;
  disponibilidad: string;
  observaciones: string;
  prioridad: number;
  es_conviviente: boolean,
  id_paciente: IPaciente;
  id_persona: IPersona;
}

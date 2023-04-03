import {IRelacionPacientePersona} from "../interfaces/i-relacion-paciente-persona";

export class RelacionPacientePersona implements IRelacionPacientePersona{
  id: number;
  tipo_relacion: string;
  tiene_llaves_vivienda: boolean;
  disponibilidad: string;
  observaciones: string;
  prioridad: number;
  es_conviviente: boolean;
  id_paciente: any;
  id_persona: any;
}

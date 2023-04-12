import {IPaciente} from "./i-paciente";

export interface IRelacionPacientePersona {
  id: number;
  telefono:number;
  apellidos: string;
  nombre: string;
  tipo_relacion: string;
  tiene_llaves_vivienda: boolean;
  disponibilidad: string;
  observaciones: string;
  prioridad: number;
  es_conviviente: boolean,
  id_paciente: IPaciente;
}

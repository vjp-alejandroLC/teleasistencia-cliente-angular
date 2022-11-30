import {IPaciente} from "./i-paciente";
import {ICentroSanitario} from "./i-centro-sanitario";

export interface IRelacionUsuarioCentro {
  id: number;
  persona_contacto: string;
  distancia: number;
  tiempo: number;
  observaciones: string;
  id_paciente: IPaciente;
  id_centro_sanitario: ICentroSanitario;
}

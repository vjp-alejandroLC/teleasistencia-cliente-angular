import {IRelacionUsuarioCentro} from "../interfaces/i-relacion-usuario-centro";

export class RelacionUsuarioCentro implements IRelacionUsuarioCentro{
  id: number;
  persona_contacto: string;
  distancia: number;
  tiempo: number;
  observaciones: string;
  id_paciente: any;
  id_centro_sanitario: any;
}

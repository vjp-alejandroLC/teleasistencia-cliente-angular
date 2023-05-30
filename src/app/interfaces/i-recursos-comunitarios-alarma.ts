import {IAlarma} from "./i-alarma";
import {IRecursoComunitario} from "./i-recurso-comunitario";

export interface IRecursosComunitariosAlarma {
  id: number;
  fecha_registro: Date;
  persona: string;
  acuerdo_alcanzado: string;
  id_alarma: IAlarma;
  id_recurso_comunitario: IRecursoComunitario;
}

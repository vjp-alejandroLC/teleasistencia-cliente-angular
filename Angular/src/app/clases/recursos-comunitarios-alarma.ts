import {IRecursosComunitariosAlarma} from "../interfaces/i-recursos-comunitarios-alarma";

export class RecursosComunitariosAlarma implements IRecursosComunitariosAlarma{
  id: number;
  fecha_registro: Date;
  persona: string;
  acuerdo_alcanzado: string;
  id_alarma: any;
  id_recurso_comunitario: any;
}

import {IAlarma} from "./i-alarma";
import {ICentroSanitario} from "./i-centro-sanitario";

export interface ICentroSanitarioAlarma {
  id: number;
  fecha_registro: Date;
  persona: string;
  acuerdo_alcanzado: string;
  id_alarma: IAlarma;
  id_centro_sanitario: ICentroSanitario;
}

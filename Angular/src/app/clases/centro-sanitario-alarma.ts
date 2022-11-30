import {ICentroSanitarioAlarma} from "../interfaces/i-centro-sanitario-alarma";

export class CentroSanitarioAlarma implements ICentroSanitarioAlarma{
  id: number;
  fecha_registro: Date;
  persona: string;
  acuerdo_alcanzado: string;
  id_alarma: any;
  id_centro_sanitario: any;
}

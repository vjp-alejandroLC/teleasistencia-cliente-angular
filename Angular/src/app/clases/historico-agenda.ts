import {IHistoricoAgenda} from "../interfaces/i-historico-agenda";

export class HistoricoAgenda implements IHistoricoAgenda {
  id: number;
  id_agenda: any;
  id_teleoperador: any;
  fecha_llamada: Date;
  observaciones: string;
}

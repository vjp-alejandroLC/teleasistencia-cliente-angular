import {IHistoricoTipoSituacion} from "../interfaces/i-historico-tipo-situacion";
import {ITipoSituacion} from "../interfaces/i-tipo-situacion";
import {ITerminal} from "../interfaces/i-terminal";

export class HistoricoTipoSituacion implements IHistoricoTipoSituacion {
  id: number;
  id_tipo_situacion: any;
  id_terminal: any;
  fecha: Date;
}

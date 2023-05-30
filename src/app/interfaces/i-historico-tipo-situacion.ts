import {ITipoSituacion} from "./i-tipo-situacion";
import {ITerminal} from "./i-terminal";

export interface IHistoricoTipoSituacion {
  id: number;
  id_tipo_situacion: any;
  id_terminal: any;
  fecha: Date;
}

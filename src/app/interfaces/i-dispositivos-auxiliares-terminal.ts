import {ITerminal} from "./i-terminal";
import {ITipoAlarma} from "./i-tipo-alarma";

export interface IDispositivosAuxiliaresTerminal {
  id: number;
  id_terminal: ITerminal;
  id_tipo_alarma: ITipoAlarma;
}

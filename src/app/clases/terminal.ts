import {ITerminal} from "../interfaces/i-terminal";

export class Terminal implements ITerminal{
  id: number;
  numero_terminal: string;
  modo_acceso_vivienda: string;
  barreras_arquitectonicas: string;
  id_titular: any;
  id_tipo_vivienda: any;
}

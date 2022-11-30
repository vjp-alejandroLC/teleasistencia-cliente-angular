import {ITerminal} from "./i-terminal";
import {IPersona} from "./i-persona";
import {ITipoModalidadPaciente} from "./i-tipo-modalidad-paciente";

export interface IPaciente {
  id: number;
  tiene_ucr: boolean;
  numero_expediente: string;
  numero_seguridad_social: string;
  prestacion_otros_servicios_sociales: string;
  observaciones_medicas: string;
  intereses_y_actividades: string;
  id_terminal: ITerminal;
  id_persona: IPersona;
  id_tipo_modalidad_paciente: ITipoModalidadPaciente;
}

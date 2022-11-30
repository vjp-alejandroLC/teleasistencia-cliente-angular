import {IPaciente} from "../interfaces/i-paciente";
import {ITerminal} from "../interfaces/i-terminal";
import {IPersona} from "../interfaces/i-persona";
import {ITipoModalidadPaciente} from "../interfaces/i-tipo-modalidad-paciente";

export class Paciente implements IPaciente{
  id: number;
  tiene_ucr: boolean;
  numero_expediente: string;
  numero_seguridad_social: string;
  prestacion_otros_servicios_sociales: string;
  observaciones_medicas: string;
  intereses_y_actividades: string;
  id_terminal: any;
  id_persona: any;
  id_tipo_modalidad_paciente: any;
}

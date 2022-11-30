import {IPersonaContactoAlarma} from "../interfaces/i-persona-contacto-alarma";

export class PersonaContactoAlarma implements IPersonaContactoAlarma{
  id: number;
  fecha_registro: Date;
  acuerdo_alcanzado: string;
  id_alarma: any;
  id_persona_contacto: any;
}

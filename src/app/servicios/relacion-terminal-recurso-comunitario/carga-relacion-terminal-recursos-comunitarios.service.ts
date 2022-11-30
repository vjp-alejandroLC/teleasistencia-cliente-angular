import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRelacionTerminalRecursoComunitarios} from "../../interfaces/i-relacion-terminal-recurso-comunitarios";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CargaRelacionTerminalRecursosComunitariosService {
  private urlBase = environment.urlBase;
  private URL_SERVER_RELACION_TERMINAL_RECURSOS_COMUNITARIOS = this.urlBase + 'relacion_terminal_recurso_comunitario';

  constructor(private http: HttpClient) { }

  getRelacionesTerminalesRecursosComunitarios(): Observable<IRelacionTerminalRecursoComunitarios[]> {
    return this.http.get<IRelacionTerminalRecursoComunitarios[]>(this.URL_SERVER_RELACION_TERMINAL_RECURSOS_COMUNITARIOS);
  }
  getRelacionTerminalRecursoComunitario(idRelacion: number): Observable<IRelacionTerminalRecursoComunitarios> {
    return this.http.get<IRelacionTerminalRecursoComunitarios>(this.URL_SERVER_RELACION_TERMINAL_RECURSOS_COMUNITARIOS+ '/' + idRelacion);
  }
  modificarRelacionRecurso(relacionRecurso: IRelacionTerminalRecursoComunitarios): Observable<IRelacionTerminalRecursoComunitarios> {
    return this.http.put<IRelacionTerminalRecursoComunitarios>(this.URL_SERVER_RELACION_TERMINAL_RECURSOS_COMUNITARIOS+'/'+ relacionRecurso.id, relacionRecurso);
  }
  nuevaRelacionRecurso(relacionRecurso:IRelacionTerminalRecursoComunitarios): Observable<IRelacionTerminalRecursoComunitarios> {
    return this.http.post<IRelacionTerminalRecursoComunitarios> (this.URL_SERVER_RELACION_TERMINAL_RECURSOS_COMUNITARIOS, relacionRecurso);
  }
  eliminarRelacionRecurso(relacionRecurso: IRelacionTerminalRecursoComunitarios): Observable<IRelacionTerminalRecursoComunitarios> {
    return this.http.delete<IRelacionTerminalRecursoComunitarios>(this.URL_SERVER_RELACION_TERMINAL_RECURSOS_COMUNITARIOS + '/' + relacionRecurso.id)
  }
}


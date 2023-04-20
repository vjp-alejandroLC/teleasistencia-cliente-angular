import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRecursoComunitario} from '../../interfaces/i-recurso-comunitario';
import {environment} from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class CargaRecursoComunitarioService {
  private urlBase = environment.urlBase;
  private URL_SERVER_RECURSOS_COMUNITARIOS = this.urlBase + 'recurso_comunitario';

  constructor(private http: HttpClient) {
  }

  getRecursosComunitarios(): Observable<IRecursoComunitario[]> {
    return this.http.get<IRecursoComunitario[]>(this.URL_SERVER_RECURSOS_COMUNITARIOS);
  }

  getRecursoComunitario(idRecursoComunitario: number): Observable<IRecursoComunitario> {
    return this.http.get<IRecursoComunitario>(this.URL_SERVER_RECURSOS_COMUNITARIOS + '/' + idRecursoComunitario);
  }

  modificarRecursoComunitario(recursoComunitario: IRecursoComunitario, id: number): Observable<IRecursoComunitario> {
    return this.http.put<IRecursoComunitario>(this.URL_SERVER_RECURSOS_COMUNITARIOS + '/' + id, recursoComunitario);
  }

  nuevoRecursoComunitario(recursoComunitario: any): Observable<IRecursoComunitario> {
    return this.http.post<IRecursoComunitario>(this.URL_SERVER_RECURSOS_COMUNITARIOS, recursoComunitario)/*.pipe(
      catchError(error => {
        console.error('Error en la petición POST:', error)
        throw error
      })
    );*/
  }

  eliminarRecursoComunitario(recursoComunitario:IRecursoComunitario) {
    this.http.delete<IRecursoComunitario>(this.URL_SERVER_RECURSOS_COMUNITARIOS + '/' + recursoComunitario.id).subscribe(
      error => console.log(error),
      () => console.log('Fin del DELETE')
    )
  }
}

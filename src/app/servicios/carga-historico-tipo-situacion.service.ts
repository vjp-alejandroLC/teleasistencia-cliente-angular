import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {IHistoricoTipoSituacion} from "../interfaces/i-historico-tipo-situacion";

@Injectable({
  providedIn: 'root'
})

export class CargaHistoricoTipoSituacionService {
  private urlBase = environment.urlBase;
  private URL_SERVER_HISTORICO_TIPOS_SITUACION = this.urlBase + 'historico_tipo_situacion';

  constructor(private http: HttpClient) {
  }

  getHistoricoTiposSituacion(): Observable<IHistoricoTipoSituacion[]> {
    return this.http.get<IHistoricoTipoSituacion[]>(this.URL_SERVER_HISTORICO_TIPOS_SITUACION);
  }

  getHistoricoTipoSituacion(idHistoricoTipoSituacion): Observable<IHistoricoTipoSituacion[]> {
    return this.http.get<IHistoricoTipoSituacion[]>(this.URL_SERVER_HISTORICO_TIPOS_SITUACION + '/' + idHistoricoTipoSituacion);
  }

  modificarHistoricoTipoSituacion(historicoTipoSituacion: IHistoricoTipoSituacion): Observable<IHistoricoTipoSituacion> {
    return this.http.put<IHistoricoTipoSituacion>(this.URL_SERVER_HISTORICO_TIPOS_SITUACION + '/' + historicoTipoSituacion.id, historicoTipoSituacion);
  }

  nuevoHistoricoTipoSituacion(historicoTipoSituacion: IHistoricoTipoSituacion): Observable<IHistoricoTipoSituacion> {
    return this.http.post<IHistoricoTipoSituacion>(this.URL_SERVER_HISTORICO_TIPOS_SITUACION, historicoTipoSituacion);
  }

  borrarHistoricoTipoSituacion(idHistoricoSituacion: number) {
    return this.http.delete<IHistoricoTipoSituacion>(this.URL_SERVER_HISTORICO_TIPOS_SITUACION + '/' + idHistoricoSituacion);
  }
}

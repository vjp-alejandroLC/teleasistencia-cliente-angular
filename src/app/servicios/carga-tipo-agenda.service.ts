import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {ITipoAgenda} from "../interfaces/i-tipo-agenda";

@Injectable({
  providedIn: 'root'
})

export class CargaTipoAgendaService {
  private urlBase = environment.urlBase;
  private URL_SERVER_TIPOS_AGENDAS = this.urlBase + 'tipo_agenda';

  constructor(private http: HttpClient) {
  }

  getTiposAgenda(): Observable<ITipoAgenda[]> {
    return this.http.get<ITipoAgenda[]>(this.URL_SERVER_TIPOS_AGENDAS);
  }

  getTipoAgenda(idTipoAgenda: number): Observable<ITipoAgenda> {
    return this.http.get<ITipoAgenda>(this.URL_SERVER_TIPOS_AGENDAS + '/' + idTipoAgenda);
  }

  modificarTipoAgenda(tipoAgenda: ITipoAgenda): Observable<ITipoAgenda> {
    return this.http.put<ITipoAgenda>(this.URL_SERVER_TIPOS_AGENDAS + '/' + tipoAgenda.id, tipoAgenda);
  }

  nuevoTipoAgenda(tipoAgenda: ITipoAgenda): Observable<ITipoAgenda> {
    return this.http.post<ITipoAgenda>(this.URL_SERVER_TIPOS_AGENDAS, tipoAgenda);
  }

  borrarTipoAgenda(idTipoAgenda: number) {
    return this.http.delete<ITipoAgenda>(this.URL_SERVER_TIPOS_AGENDAS + '/' + idTipoAgenda);
  }
}

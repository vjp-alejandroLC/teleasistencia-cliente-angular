import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IHistoricoAgenda} from "../interfaces/i-historico-agenda";
import {IAgenda} from "../interfaces/i-agenda";

@Injectable({
  providedIn: 'root'
})
export class CargaHistoricoAgendaService {


  private urlBase = environment.urlBase;
  private URL_HISTORICO_AGENDA = this.urlBase + 'historico_agenda_llamadas';

  constructor(private http: HttpClient) {
  }

  getHistoricoAgendas(): Observable<IHistoricoAgenda[]> {
    return this.http.get<IHistoricoAgenda[]>(this.URL_HISTORICO_AGENDA);
  }

  getHistoricoAgenda(idHistoricoAgenda: number): Observable<IHistoricoAgenda[]> {
    return this.http.get<IHistoricoAgenda[]>(this.URL_HISTORICO_AGENDA + '/' + idHistoricoAgenda);
  }

  getHistoricoAgendaPorIdAgenda(idAgenda: number): Observable<IHistoricoAgenda[]> {
    return this.http.get<IHistoricoAgenda[]>(this.URL_HISTORICO_AGENDA + '?id_agenda=' + idAgenda);
  }

  getHistoricoAgendasPorIdTeleoperador(idTeleoperador: number): Observable<IHistoricoAgenda[]> {
    return this.http.get<IHistoricoAgenda[]>(this.URL_HISTORICO_AGENDA + '?id_teleoperador=' + idTeleoperador);
  }

  modificarHistoricoAgenda(historicoAgenda: IHistoricoAgenda): Observable<IHistoricoAgenda> {
    return this.http.put<IHistoricoAgenda>(this.URL_HISTORICO_AGENDA + '/' + historicoAgenda.id, historicoAgenda);
  }

  nuevoHistoricoAgenda(historicoAgenda: IHistoricoAgenda): Observable<IHistoricoAgenda> {
    return this.http.post<IHistoricoAgenda>(this.URL_HISTORICO_AGENDA, historicoAgenda);
  }

  borrarHistoricoAgenda(idHistoricoAgenda: number) {
    return this.http.delete<IHistoricoAgenda>(this.URL_HISTORICO_AGENDA + '/' + idHistoricoAgenda);
  }

}

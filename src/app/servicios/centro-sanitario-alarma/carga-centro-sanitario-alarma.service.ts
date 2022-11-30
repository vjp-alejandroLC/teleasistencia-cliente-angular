import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {ICentroSanitarioAlarma} from "../../interfaces/i-centro-sanitario-alarma";

@Injectable({
  providedIn: 'root'
})
export class CargaCentroSanitarioAlarmaService {

  private urlBase = environment.urlBase;
  private URL_SERVER_CENTRO_SANITARIO_ALARMA = this.urlBase + 'centro_sanitario_en_alarma';

  constructor(private http: HttpClient) {
  }

  getCentrosSanitarioAlarma(): Observable<ICentroSanitarioAlarma[]> {
    return this.http.get<ICentroSanitarioAlarma[]>(this.URL_SERVER_CENTRO_SANITARIO_ALARMA);
  }

  getCentroSanitarioAlarma(idCentroSanitarioAlarma: number): Observable<ICentroSanitarioAlarma> {
    return this.http.get<ICentroSanitarioAlarma>(this.URL_SERVER_CENTRO_SANITARIO_ALARMA + '/' + idCentroSanitarioAlarma);
  }

  modificarCentroSanitarioAlarma(centroSanitarioAlarma: ICentroSanitarioAlarma): Observable<ICentroSanitarioAlarma> {
    return this.http.put<ICentroSanitarioAlarma>(this.URL_SERVER_CENTRO_SANITARIO_ALARMA + '/' + centroSanitarioAlarma.id, centroSanitarioAlarma);
  }

  nuevoCentroSanitarioAlarma(centroSanitarioAlarma: ICentroSanitarioAlarma): Observable<ICentroSanitarioAlarma> {
    return this.http.post<ICentroSanitarioAlarma>(this.URL_SERVER_CENTRO_SANITARIO_ALARMA, centroSanitarioAlarma);
  }

  eliminarCentroSanitarioAlarma(centroSanitarioAlarma: ICentroSanitarioAlarma): Observable<ICentroSanitarioAlarma> {
    return this.http.delete<ICentroSanitarioAlarma>(this.URL_SERVER_CENTRO_SANITARIO_ALARMA + '/' + centroSanitarioAlarma.id);
  }
}

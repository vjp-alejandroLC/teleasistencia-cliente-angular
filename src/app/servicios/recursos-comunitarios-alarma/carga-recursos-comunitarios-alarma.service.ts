import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {IRecursosComunitariosAlarma} from "../../interfaces/i-recursos-comunitarios-alarma";

@Injectable({
  providedIn: 'root'
})
export class CargaRecursosComunitariosAlarmaService {
  private urlBase = environment.urlBase;
  private URL_SERVER_RECURSOS_COMUNITARIOS_ALARMA = this.urlBase + 'recursos_comunitarios_en_alarma';
  constructor(private http: HttpClient) { }

  getRecursosComunitariosAlarma(): Observable<IRecursosComunitariosAlarma[]> {
    return this.http.get<IRecursosComunitariosAlarma[]>(this.URL_SERVER_RECURSOS_COMUNITARIOS_ALARMA);
  }

  getRecursoComunitarioAlarma(idRecursosComunitariosAlarma: number): Observable<IRecursosComunitariosAlarma> {
    return this.http.get<IRecursosComunitariosAlarma>(this.URL_SERVER_RECURSOS_COMUNITARIOS_ALARMA+ '/' + idRecursosComunitariosAlarma);
  }

  modificarRecursosComunitariosAlarma(recursosComunitariosAlarma: IRecursosComunitariosAlarma): Observable<IRecursosComunitariosAlarma> {
    return this.http.put<IRecursosComunitariosAlarma>(this.URL_SERVER_RECURSOS_COMUNITARIOS_ALARMA+ '/' + recursosComunitariosAlarma.id, recursosComunitariosAlarma);
  }

  nuevaRecursosComunitariosAlarma(recursosComunitariosAlarma: IRecursosComunitariosAlarma): Observable<IRecursosComunitariosAlarma> {
    return this.http.post<IRecursosComunitariosAlarma> (this.URL_SERVER_RECURSOS_COMUNITARIOS_ALARMA, recursosComunitariosAlarma);
  }
  eliminarRecursosComunitariosAlarma(recursosComunitariosAlarma: IRecursosComunitariosAlarma): Observable<IRecursosComunitariosAlarma> {
    return this.http.delete<IRecursosComunitariosAlarma> (this.URL_SERVER_RECURSOS_COMUNITARIOS_ALARMA + '/' + recursosComunitariosAlarma.id);
  }




}

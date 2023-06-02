import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClasificacionAlarma} from '../interfaces/i-clasificacion-alarma';
import {IUsers} from "../interfaces/i-users";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CargaClasificacionAlarmaService {
  private urlBase = environment.urlBase;
  private URL_SERVER_CLASIFICACIONES_ALARMAS = this.urlBase + 'clasificacion_alarma';

  constructor(private http: HttpClient) {
  }

  getClasificacionesAlarmas(): Observable<IClasificacionAlarma[]> {
    return this.http.get<IClasificacionAlarma[]>(this.URL_SERVER_CLASIFICACIONES_ALARMAS);
  }

  getClasificacionAlarma(idClasificacionAlarma: number): Observable<IClasificacionAlarma> {
    return this.http.get<IClasificacionAlarma>(this.URL_SERVER_CLASIFICACIONES_ALARMAS + '/' + idClasificacionAlarma);
  }

  modificarClasificacionAlarma(clasificacionAlarma: IClasificacionAlarma): Observable<IClasificacionAlarma> {
    return this.http.put<IClasificacionAlarma>(this.URL_SERVER_CLASIFICACIONES_ALARMAS + '/' + clasificacionAlarma.id, clasificacionAlarma);
  }

  nuevaClasificacionAlarma(clasificacionAlarma: IClasificacionAlarma): Observable<IClasificacionAlarma> {
    return this.http.post<IClasificacionAlarma>(this.URL_SERVER_CLASIFICACIONES_ALARMAS, clasificacionAlarma);
  }

  eliminarClasificacionAlarma(clasificacionAlarma:IClasificacionAlarma): Observable<IClasificacionAlarma> {
    return this.http.delete<IClasificacionAlarma>(this.URL_SERVER_CLASIFICACIONES_ALARMAS + '/' + clasificacionAlarma.id);
  }
}

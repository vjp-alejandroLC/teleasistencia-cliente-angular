import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICopiaSeguridad} from "../interfaces/i-copia-seguridad";

@Injectable({
  providedIn: 'root'
})
export class CargaCopiaSeguridadService {
  private urlBase = environment.urlBase;
  private URL_SERVER_DIRECCIONES = this.urlBase + 'gestion_base_datos';

  constructor(private http: HttpClient) { }

  getCopias(): Observable<ICopiaSeguridad[]> {
    return this.http.get<ICopiaSeguridad[]>(this.URL_SERVER_DIRECCIONES);
  }

  nuevaCopia(copia: ICopiaSeguridad): Observable<ICopiaSeguridad> {
    return this.http.post<ICopiaSeguridad>(this.URL_SERVER_DIRECCIONES, copia);
  }

  restaurarCopia(): Observable<ICopiaSeguridad>{
    return this.http.delete<ICopiaSeguridad>(this.URL_SERVER_DIRECCIONES+'/restore')
  }

  restaurarCopiaConID(copia: ICopiaSeguridad): Observable<ICopiaSeguridad>{
    return this.http.delete<ICopiaSeguridad>(this.URL_SERVER_DIRECCIONES+'/x'+copia.id)
  }

  borrarCopia(copia: ICopiaSeguridad): Observable<ICopiaSeguridad>{
    return this.http.delete<ICopiaSeguridad>(this.URL_SERVER_DIRECCIONES+'/'+copia.id)
  }
}

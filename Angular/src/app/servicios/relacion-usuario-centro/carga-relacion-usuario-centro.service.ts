import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {IRelacionUsuarioCentro} from "../../interfaces/i-relacion-usuario-centro";

@Injectable({
  providedIn: 'root'
})
export class CargaRelacionUsuarioCentroService {

  private urlBase = environment.urlBase;
  private URL_SERVER_RELACION_USUARIO_CENTRO = this.urlBase + 'relacion_usuario_centro';

  constructor(private http: HttpClient) { }

  getRelacionesUsuariosCentros(): Observable<IRelacionUsuarioCentro[]> {
    return this.http.get<IRelacionUsuarioCentro[]>(this.URL_SERVER_RELACION_USUARIO_CENTRO);
  }

  getRelacionUsuarioCentro(idRelacionUsuarioCentro: number): Observable<IRelacionUsuarioCentro> {
    return this.http.get<IRelacionUsuarioCentro>(this.URL_SERVER_RELACION_USUARIO_CENTRO+ '/' + idRelacionUsuarioCentro);
  }

  modificarRelacionUsuarioCentro(relacionUsuarioCentro: IRelacionUsuarioCentro): Observable<IRelacionUsuarioCentro> {
    return this.http.put<IRelacionUsuarioCentro>(this.URL_SERVER_RELACION_USUARIO_CENTRO+ '/' + relacionUsuarioCentro.id, relacionUsuarioCentro);
  }

  nuevaRelacionUsuarioCentro(relacionUsuarioCentro: IRelacionUsuarioCentro): Observable<IRelacionUsuarioCentro> {
    return this.http.post<IRelacionUsuarioCentro> (this.URL_SERVER_RELACION_USUARIO_CENTRO, relacionUsuarioCentro);
  }

  eliminarRelacionUsuarioCentro(relacionUsuarioCentro: IRelacionUsuarioCentro): Observable<IRelacionUsuarioCentro> {
    return this.http.delete<IRelacionUsuarioCentro> (this.URL_SERVER_RELACION_USUARIO_CENTRO +'/'+ relacionUsuarioCentro.id);
  }
}

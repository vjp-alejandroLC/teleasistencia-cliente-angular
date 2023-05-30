import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {IPaciente} from "../../interfaces/i-paciente";

@Injectable({
  providedIn: 'root'
})
export class CargaPacienteService {
  private urlBase = environment.urlBase;
  private URL_SERVER_PACIENTE = this.urlBase + 'paciente';
  constructor(private http: HttpClient) { }

  getPacientes(): Observable<IPaciente[]> {
    return this.http.get<IPaciente[]>(this.URL_SERVER_PACIENTE);
  }

  getPaciente(idPaciente: number): Observable<IPaciente> {
    return this.http.get<IPaciente>(this.URL_SERVER_PACIENTE + '/' + idPaciente);
  }

  modificarPaciente(paciente: IPaciente): Observable<IPaciente> {
    return this.http.put<IPaciente>(this.URL_SERVER_PACIENTE + '/' + paciente.id, paciente)
  }

  nuevoPaciente(paciente: IPaciente): Observable<IPaciente> {
    return this.http.post<IPaciente>(this.URL_SERVER_PACIENTE, paciente)
  }

  eliminarPaciente(paciente: IPaciente): Observable<IPaciente> {
    return this.http.delete<IPaciente>(this.URL_SERVER_PACIENTE +'/'+ paciente.id)
  }

}

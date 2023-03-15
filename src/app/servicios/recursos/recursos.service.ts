import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {IRecursos} from "../../interfaces/i-recursos";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) { }

  getRecursos(): Observable<IRecursos[]>{
    return this.http.get<IRecursos[]>(this.urlBase);
  }

  postRecursos(): Observable<IRecursos>{
    return this.http.get<IRecursos>(this.urlBase);
  }

  deleteRecursos(id: number): Observable<IRecursos>{
    return this.http.delete<IRecursos>(this.urlBase + '/' + id);
  }

  putRecursos(recurso: IRecursos): Observable<IRecursos>{
    return this.http.get<IRecursos>(this.urlBase + '/' +recurso.id);
  }
}

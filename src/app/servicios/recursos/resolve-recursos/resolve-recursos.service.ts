import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IRecursos} from "../../../interfaces/i-recursos";

@Injectable({
  providedIn: 'root'
})
export class ResolveRecursosService {

  constructor(private resolveRecursos: ResolveRecursosService, private route: Router) { }
  resolve(ruta: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecursos[]> | any{
    return this.resolveRecursos
  }
}

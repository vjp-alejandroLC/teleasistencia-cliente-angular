import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IRelacionTerminalRecursoComunitarios} from "../../interfaces/i-relacion-terminal-recurso-comunitarios";
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "./carga-relacion-terminal-recursos-comunitarios.service";
@Injectable({
  providedIn: 'root'
})
export class ListaRelacionTerminalRecursosComunitariosResolveService implements Resolve<IRelacionTerminalRecursoComunitarios>{

  constructor(private cargarRelacionTerminalRecursoComunitarios: CargaRelacionTerminalRecursosComunitariosService, private  router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRelacionTerminalRecursoComunitarios>  {
    return  this.cargarRelacionTerminalRecursoComunitarios.getRelacionesTerminalesRecursosComunitarios().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }
}

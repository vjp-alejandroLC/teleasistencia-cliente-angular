import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IRelacionTerminalRecursoComunitarios} from "../../interfaces/i-relacion-terminal-recurso-comunitarios";
import {CargaRelacionTerminalRecursosComunitariosService} from "./carga-relacion-terminal-recursos-comunitarios.service";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModificarRelacionTerminalRecursosComunitariosResolveService implements Resolve<IRelacionTerminalRecursoComunitarios>{

  constructor(private cargaRelacionRecursos: CargaRelacionTerminalRecursosComunitariosService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRelacionTerminalRecursoComunitarios> {
    return this.cargaRelacionRecursos.getRelacionTerminalRecursoComunitario(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null)
      })
    );
  }
}

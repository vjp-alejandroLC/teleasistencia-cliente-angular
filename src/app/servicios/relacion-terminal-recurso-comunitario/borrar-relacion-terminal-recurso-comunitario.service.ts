import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { CargaRelacionTerminalRecursosComunitariosService } from "./carga-relacion-terminal-recursos-comunitarios.service";
import { RelacionTerminalRecursoComunitarios } from "../../clases/relacion-terminal-recurso-comunitarios";


@Injectable({
  providedIn: 'root'
})
export class BorrarRelacionTerminalRecursoComunitarioService {

  constructor(private cargaRelacionTerminalRecurso: CargaRelacionTerminalRecursosComunitariosService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RelacionTerminalRecursoComunitarios> {
    return this.cargaRelacionTerminalRecurso.getRelacionTerminalRecursoComunitario(route.params['id']).pipe(
      catchError( error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    )
  }


}

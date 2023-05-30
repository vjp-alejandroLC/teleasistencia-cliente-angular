import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IRecursosComunitariosAlarma} from "../../interfaces/i-recursos-comunitarios-alarma";
import {CargaRecursosComunitariosAlarmaService} from "./carga-recursos-comunitarios-alarma.service";


@Injectable({
  providedIn: 'root'
})
export class ModificarRecursosComunitariosAlarmaResolveService implements Resolve<IRecursosComunitariosAlarma> {

  constructor(private cargarRecursoComunitariosAlarma: CargaRecursosComunitariosAlarmaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecursosComunitariosAlarma> {
    return this.cargarRecursoComunitariosAlarma.getRecursoComunitarioAlarma(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }

}

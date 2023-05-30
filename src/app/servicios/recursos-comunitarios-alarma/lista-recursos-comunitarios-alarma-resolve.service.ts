import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IRecursosComunitariosAlarma} from "../../interfaces/i-recursos-comunitarios-alarma";
import {CargaRecursosComunitariosAlarmaService} from "./carga-recursos-comunitarios-alarma.service";


@Injectable({
  providedIn: 'root'
})
export class ListaRecursosComunitariosAlarmaResolveService implements Resolve<IRecursosComunitariosAlarma> {

  constructor(private cargarRecursosComunitariosAlarma: CargaRecursosComunitariosAlarmaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecursosComunitariosAlarma> {
    return this.cargarRecursosComunitariosAlarma.getRecursosComunitariosAlarma().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }

}

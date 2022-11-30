import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ICentroSanitarioAlarma} from "../../interfaces/i-centro-sanitario-alarma";
import {CargaCentroSanitarioAlarmaService} from "./carga-centro-sanitario-alarma.service";


@Injectable({
  providedIn: 'root'
})
export class ModificarCentroSanitarioAlarmaResolveService implements Resolve<ICentroSanitarioAlarma> {

  constructor(private cargarCentroSanitarioAlarma: CargaCentroSanitarioAlarmaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICentroSanitarioAlarma> {
    return this.cargarCentroSanitarioAlarma.getCentroSanitarioAlarma(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }
}

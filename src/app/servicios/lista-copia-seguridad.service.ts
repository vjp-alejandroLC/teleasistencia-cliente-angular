import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {CargaCopiaSeguridadService} from "./carga-copia-seguridad.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {ICopiaSeguridad} from "../interfaces/i-copia-seguridad";

@Injectable({
  providedIn: 'root'
})
export class ListaCopiaSeguridadService implements Resolve<ICopiaSeguridad>{

  constructor(private cargaCopia: CargaCopiaSeguridadService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICopiaSeguridad> {
    return this.cargaCopia.getCopias().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IRelacionUsuarioCentro} from "../../interfaces/i-relacion-usuario-centro";
import {CargaRelacionUsuarioCentroService} from "./carga-relacion-usuario-centro.service";

@Injectable({
  providedIn: 'root'
})
export class ListaRelacionUsuarioCentroResolveService implements Resolve<IRelacionUsuarioCentro>{

  constructor(private cargarRelacionUsuarioCentro: CargaRelacionUsuarioCentroService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRelacionUsuarioCentro> {
    return this.cargarRelacionUsuarioCentro.getRelacionesUsuariosCentros().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }
}

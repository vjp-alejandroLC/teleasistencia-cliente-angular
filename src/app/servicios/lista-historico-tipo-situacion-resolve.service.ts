import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IHistoricoTipoSituacion} from "../interfaces/i-historico-tipo-situacion";
import {CargaHistoricoTipoSituacionService} from "./carga-historico-tipo-situacion.service";

@Injectable({
  providedIn: 'root'
})

export class ListaHistoricoTipoSituacionResolveService implements Resolve<IHistoricoTipoSituacion> {

  constructor(private cargaHistoricoTipoSituacion: CargaHistoricoTipoSituacionService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHistoricoTipoSituacion> {
    return this.cargaHistoricoTipoSituacion.getHistoricoTiposSituacion().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

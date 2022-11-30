import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IDireccion} from '../interfaces/i-direccion';
import {CargaDireccionService} from './carga-direccion.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IHistoricoTipoSituacion} from "../interfaces/i-historico-tipo-situacion";
import {CargaHistoricoTipoSituacionService} from "./carga-historico-tipo-situacion.service";

@Injectable({
  providedIn: 'root'
})

export class DetallesHistoricoTipoSituacionResolveService implements Resolve<IHistoricoTipoSituacion> {

  constructor(private cargaHisoricoTipoSituacion: CargaHistoricoTipoSituacionService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHistoricoTipoSituacion> {
    return this.cargaHisoricoTipoSituacion.getHistoricoTipoSituacion(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

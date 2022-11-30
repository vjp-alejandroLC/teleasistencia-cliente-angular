import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ITipoAgenda} from "../interfaces/i-tipo-agenda";
import {CargaTipoAgendaService} from "./carga-tipo-agenda.service";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetallesTipoAgendaResolveService implements Resolve<ITipoAgenda> {

  constructor(private cargaTiposAgenda: CargaTipoAgendaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoAgenda> {
    return this.cargaTiposAgenda.getTipoAgenda(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

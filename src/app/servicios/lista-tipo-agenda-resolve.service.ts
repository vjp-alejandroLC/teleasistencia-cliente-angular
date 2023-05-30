import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {CargaTipoAgendaService} from "./carga-tipo-agenda.service";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ITipoAgenda} from "../interfaces/i-tipo-agenda";

@Injectable({
  providedIn: 'root'
})

export class ListaTiposAgendaResolveService implements Resolve<ITipoAgenda> {

  constructor(private cargaTiposAgendaService: CargaTipoAgendaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoAgenda> {
    return this.cargaTiposAgendaService.getTiposAgenda().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

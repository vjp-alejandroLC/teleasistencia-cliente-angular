import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IAgenda} from "../interfaces/i-agenda";
import {CargaAgendaService} from "./carga-agenda.service";
import {IHistoricoAgenda} from "../interfaces/i-historico-agenda";
import {CargaHistoricoAgendaService} from "./carga-historico-agenda.service";

@Injectable({
  providedIn: 'root'
})

export class ListaHistoricoAgendaResolveService implements Resolve<IHistoricoAgenda> {

  constructor(private cargaHistoricoAgendaService: CargaHistoricoAgendaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHistoricoAgenda> {
    return this.cargaHistoricoAgendaService.getHistoricoAgendas().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IDispositivosAuxiliaresTerminal} from "../../interfaces/i-dispositivos-auxiliares-terminal";
import {CargaDispositivosAuxiliaresTerminalService} from "./carga-dispositivos-auxiliares-terminal.service";


@Injectable({
  providedIn: 'root'
})
export class ListaDispositivosAuxiliaresTerminalResolveService implements Resolve<IDispositivosAuxiliaresTerminal>{

  constructor(private cargarADispositivosAuxiliaresTerminal: CargaDispositivosAuxiliaresTerminalService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDispositivosAuxiliaresTerminal> {
    return this.cargarADispositivosAuxiliaresTerminal.getDispositivosAuxiliaresTerminal().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }
}

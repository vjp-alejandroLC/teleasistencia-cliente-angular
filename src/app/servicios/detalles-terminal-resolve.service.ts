import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ITerminal} from "../interfaces/i-terminal";
import {CargarTerminalService} from "./carga-terminal.service";

@Injectable({
  providedIn: 'root'
})
export class DetallesTerminalResolveService implements Resolve<ITerminal> {

  constructor(private cargarTerminal: CargarTerminalService, private router: Router) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITerminal>{
    return this.cargarTerminal.getTerminal(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    )
  }
}

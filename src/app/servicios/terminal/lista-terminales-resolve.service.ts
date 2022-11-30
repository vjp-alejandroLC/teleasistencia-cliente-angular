import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ITerminal} from "../../interfaces/i-terminal";
import {CargaTerminalesService} from "./carga-terminales.service";

@Injectable({
  providedIn: 'root'
})
export class ListaTerminalesResolveService implements Resolve<ITerminal>{

  constructor(private cargarTerminales: CargaTerminalesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITerminal>{
    return this.cargarTerminales.getTerminales().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    )
  }

}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CargaPersonaContactoAlarmaService} from "./carga-persona-contacto-alarma.service";
import {IPersonaContactoAlarma} from "../../interfaces/i-persona-contacto-alarma";

@Injectable({
  providedIn: 'root'
})
export class ListaPersonaContactoAlarmaResolveService implements Resolve<IPersonaContactoAlarma>{

  constructor(private cargaPersonaContactoAlarma: CargaPersonaContactoAlarmaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPersonaContactoAlarma> {
    return this.cargaPersonaContactoAlarma.getPersonasContactoAlarma().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of (null);
      })
    )
  }

}

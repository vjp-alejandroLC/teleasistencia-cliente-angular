import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IRelacionPacientePersona} from "../../interfaces/i-relacion-paciente-persona";
import {CargaRelacionPacientePersonaService} from "./carga-relacion-paciente-persona.service";

@Injectable({
  providedIn: 'root'
})
export class ListaRelacionPacientePersonaResolveService implements Resolve<IRelacionPacientePersona>{

  constructor(private cargarRelacionPacientePersona: CargaRelacionPacientePersonaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRelacionPacientePersona> {
    return this.cargarRelacionPacientePersona.getRelacionesPacientePersona().pipe(
      catchError( error => {
        this.router.navigate(['/inicio']);
        return of (null)
      })
    )
  }

}

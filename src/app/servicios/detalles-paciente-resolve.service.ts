import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IPaciente} from "../interfaces/i-paciente";
import {CargaPacienteService} from "./carga-paciente.service";

@Injectable({
  providedIn: 'root'
})
export class DetallesPacienteResolveService implements Resolve<IPaciente> {

  constructor(private cargarPaciente: CargaPacienteService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaciente>{
    return  this.cargarPaciente.getPaciente(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    )
  }

}

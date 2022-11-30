import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {RelacionPacientePersona} from "../../../clases/relacion-paciente-persona";
import {Paciente} from "../../../clases/paciente";
import {Persona} from "../../../clases/persona";
import {
  CargaRelacionPacientePersonaService
} from "../../../servicios/relacion-paciente-persona/carga-relacion-paciente-persona.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-crear-relacion-paciente-persona',
  templateUrl: './crear-relacion-paciente-persona.component.html',
  styleUrls: ['./crear-relacion-paciente-persona.component.scss']
})
export class CrearRelacionPacientePersonaComponent implements OnInit {
  public relacionPacientePersona: RelacionPacientePersona;
  public pacientes: Paciente[];
  public personas: Persona[];

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarRelacionPacientePersona: CargaRelacionPacientePersonaService) { }

  ngOnInit(): void {
    this.relacionPacientePersona = new RelacionPacientePersona();
    this.pacientes = this.route.snapshot.data['pacientes']
    this.personas = this.route.snapshot.data['personas']
    this.titleService.setTitle('Nueva relacion de Paciente con persona');

  }
  nuevaRelacionPacientePersona() : void {
    this.cargarRelacionPacientePersona.nuevaRelacionPacientePersona(this.relacionPacientePersona).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/relacion_paciente_persona'])
      },
      error => {
        this.alertError()
      }
  );
  }
  //Toast para el Alert indicando que la operación fue exitosa
  alertExito() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      //El tiempo que permanece la alerta, se obtiene mediante una variable global en environment.ts
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: environment.fraseCrear,
    })
  }
  //Toast para el alert indicando que hubo algún error en la operación
  alertError() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: environment.fraseErrorCrear
    })
  }
}

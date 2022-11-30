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
  selector: 'app-modificar-relacion-paciente-persona',
  templateUrl: './modificar-relacion-paciente-persona.component.html',
  styleUrls: ['./modificar-relacion-paciente-persona.component.scss']
})
export class ModificarRelacionPacientePersonaComponent implements OnInit {
  public relacionPacientePersona: RelacionPacientePersona;
  public idRelacion: number;
  public pacientes: Paciente[];
  public personas: Persona[];

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarRelacionPacientePersona: CargaRelacionPacientePersonaService) { }

  ngOnInit(): void {
    this.relacionPacientePersona = this.route.snapshot.data['relacion_paciente_persona'];
    this.idRelacion = this.route.snapshot.params['id'];
    this.pacientes = this.route.snapshot.data['pacientes']
    this.personas = this.route.snapshot.data['personas']
    this.titleService.setTitle('Modificar relacion de Paciente con persona ' + this.idRelacion);
    this.relacionPacientePersona.id_paciente = this.relacionPacientePersona.id_paciente.id;
    this.relacionPacientePersona.id_persona = this.relacionPacientePersona.id_persona.id;

  }
  optionSelectedPaciente(i: number): void {
    document.getElementsByClassName('relacion_paciente_option')[i].setAttribute('selected', '');
  }
  optionSelectedPersona(i: number): void {
    document.getElementsByClassName('relacion_persona_option')[i].setAttribute('selected', '');
  }
  modificarRelacion(): void {
    this.cargarRelacionPacientePersona.modificarRelacionPacientePersona(this.relacionPacientePersona).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/relacion_paciente_persona'])
      },
      error => {
        this.alertError()
      }
    )
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
      title: environment.fraseModificar,
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
      title: environment.fraseErrorModificar
    })
  }
}

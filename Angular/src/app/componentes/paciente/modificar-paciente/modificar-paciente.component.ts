import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Terminal } from "../../../clases/terminal";
import { Persona } from "../../../clases/persona";
import { TipoModalidadPaciente } from "../../../clases/tipo-modalidad-paciente";
import { Paciente } from "../../../clases/paciente";
import { CargaPacienteService } from "../../../servicios/paciente/carga-paciente.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-modificar-paciente',
  templateUrl: './modificar-paciente.component.html',
  styleUrls: ['./modificar-paciente.component.scss']
})
export class ModificarPacienteComponent implements OnInit {
  public paciente: Paciente
  public idPaciente: number
  public terminales: Terminal[]
  public personas: Persona[]
  public tipo_modalidades_pacientes: TipoModalidadPaciente[]

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router,
              private cargarPacientes: CargaPacienteService) { }

  ngOnInit(): void {
    this.paciente = this.route.snapshot.data['paciente'];
    this.idPaciente = this.route.snapshot.params['id'];
    this.terminales = this.route.snapshot.data['terminales'];
    this.personas = this.route.snapshot.data['personas'];
    this.tipo_modalidades_pacientes = this.route.snapshot.data['tipo_modalidades_pacientes'];
    this.paciente.id_terminal = this.paciente.id_terminal.id;
    this.paciente.id_persona =  this.paciente.id_persona.id;
    this.paciente.id_tipo_modalidad_paciente = this.paciente.id_tipo_modalidad_paciente.id;
  }
  optionSelected(i: number): void {
    document.getElementsByClassName('form-select')[i].setAttribute('selected', '');
  }

  modificarPaciente(): void {
    this.cargarPacientes.modificarPaciente(this.paciente).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/pacientes'])
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

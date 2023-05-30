import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaPersonaContactoAlarmaService
} from "../../../servicios/persona-contacto-alarma/carga-persona-contacto-alarma.service";
import {PersonaContactoAlarma} from "../../../clases/persona-contacto-alarma";
import {Alarma} from "../../../clases/alarma";
import {Persona} from "../../../clases/persona";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-persona-contacto-alarma',
  templateUrl: './crear-persona-contacto-alarma.component.html',
  styleUrls: ['./crear-persona-contacto-alarma.component.scss']
})
export class CrearPersonaContactoAlarmaComponent implements OnInit {
  public personaContactoAlarma: PersonaContactoAlarma;
  public alarmas: Alarma[];
  public personas_contacto: Persona[];
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();
  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarPersonaContactoAlarma: CargaPersonaContactoAlarmaService) { }

  ngOnInit(): void {
    this.personaContactoAlarma = new PersonaContactoAlarma();
    this.alarmas = this.route.snapshot.data['alarmas']
    this.personas_contacto = this.route.snapshot.data['personas_contactos']
    this.titleService.setTitle('Crear Persona de contacto en alarma');
    this.personaContactoAlarma.fecha_registro = this.fecha_actual;
  }
  nuevaPersonaContactoAlarma(): void {
    this.cargarPersonaContactoAlarma.nuevaPersonaContactoAlarma(this.personaContactoAlarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/personas_contacto_alarma'])
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

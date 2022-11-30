import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaRecursosComunitariosAlarmaService
} from "../../../servicios/recursos-comunitarios-alarma/carga-recursos-comunitarios-alarma.service";
import {RecursosComunitariosAlarma} from "../../../clases/recursos-comunitarios-alarma";
import {Alarma} from "../../../clases/alarma";
import {RecursoComunitario} from "../../../clases/recurso-comunitario";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-recurso-comunitario-alarma',
  templateUrl: './crear-recurso-comunitario-alarma.component.html',
  styleUrls: ['./crear-recurso-comunitario-alarma.component.scss']
})
export class CrearRecursoComunitarioAlarmaComponent implements OnInit {
  public recursoComunitarioAlarma: RecursosComunitariosAlarma;
  public alarmas: Alarma[];
  public recursosComunitarios: RecursoComunitario[];
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();
  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarRecursoComunitarioAlarma: CargaRecursosComunitariosAlarmaService) { }

  ngOnInit(): void {
    this.recursoComunitarioAlarma = new RecursosComunitariosAlarma();
    this.alarmas = this.route.snapshot.data['alarmas'];
    this.recursosComunitarios = this.route.snapshot.data['recursos_comunitarios']
    this.titleService.setTitle('Crear recurso comunitario en alarma' );

  }
  crearRecursoComunitarioAlarma(): void {
    this.cargarRecursoComunitarioAlarma.nuevaRecursosComunitariosAlarma(this.recursoComunitarioAlarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/recursos_comunitarios_alarma'])
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

import { Component, OnInit } from '@angular/core';
import {Alarma} from "../../../clases/alarma";
import {TipoAlarma} from "../../../clases/tipo-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaAlarmaService} from "../../../servicios/alarmas/carga-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Terminal} from "../../../clases/terminal";

@Component({
  selector: 'app-crear-alarma-terminal',
  templateUrl: './crear-alarma-terminal.component.html',
  styleUrls: ['./crear-alarma-terminal.component.scss']
})
export class CrearAlarmaTerminalComponent implements OnInit {

  public alarma: Alarma;
  public tipos_alarmas: TipoAlarma[];
  public terminales: Terminal[];
  // public pacientes_ucr: Paciente[];
  // public fecha_actual = new Date();
  // public anno_actual = this.fecha_actual.getFullYear();
  // public mes_actual = this.fecha_actual.getMonth() + 1;
  // public dia_actual = this.fecha_actual.getDate();


  constructor(private titleService: Title, private route: ActivatedRoute, private cargaAlarma: CargaAlarmaService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva Alarma');
    this.alarma = new Alarma();
    this.tipos_alarmas = this.route.snapshot.data['tipos_alarmas'];
    this.terminales = this.route.snapshot.data['terminales'];
    // this.alarma.id_teleoperador = null;
  }
  nuevaAlarma(): void {
    this.cargaAlarma.nuevaAlarma(this.alarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/alarmas'])
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

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaCentroSanitarioAlarmaService
} from "../../../servicios/centro-sanitario-alarma/carga-centro-sanitario-alarma.service";
import {CentroSanitarioAlarma} from "../../../clases/centro-sanitario-alarma";
import {Alarma} from "../../../clases/alarma";
import {CentroSanitario} from "../../../clases/centro-sanitario";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-centro-sanitario-alarma',
  templateUrl: './crear-centro-sanitario-alarma.component.html',
  styleUrls: ['./crear-centro-sanitario-alarma.component.scss']
})
export class CrearCentroSanitarioAlarmaComponent implements OnInit {
  public centroSanitarioAlarma: CentroSanitarioAlarma;
  public alarmas: Alarma[];
  public centrosSanitarios: CentroSanitario[];
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarCentroSanitarioAlarma: CargaCentroSanitarioAlarmaService) { }

  ngOnInit(): void {
    this.centroSanitarioAlarma = new CentroSanitarioAlarma();
    this.alarmas = this.route.snapshot.data['alarmas'];
    this.centrosSanitarios = this.route.snapshot.data['centros_sanitarios']
    this.titleService.setTitle('Crear centro sanitario en alarma' );

  }
  nuevoCentroSanitarioAlarma(): void {
    this.cargarCentroSanitarioAlarma.nuevoCentroSanitarioAlarma(this.centroSanitarioAlarma).subscribe(
      e => {
       this.alertExito()
        this.router.navigate(['/centro_sanitario_alarma']);

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

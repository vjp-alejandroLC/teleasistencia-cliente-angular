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
  selector: 'app-modificar-centro-sanitario-alarma',
  templateUrl: './modificar-centro-sanitario-alarma.component.html',
  styleUrls: ['./modificar-centro-sanitario-alarma.component.scss']
})
export class ModificarCentroSanitarioAlarmaComponent implements OnInit {
  public centroSanitarioAlarma: CentroSanitarioAlarma;
  public idCentroSanitarioAlarma: number
  public alarmas: Alarma[];
  public centrosSanitarios: CentroSanitario[];
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarCentroSanitarioAlarma: CargaCentroSanitarioAlarmaService) { }

  ngOnInit(): void {
    this.centroSanitarioAlarma = this.route.snapshot.data['centros_sanitarios_alarma'];
    this.idCentroSanitarioAlarma = this.route.snapshot.params['id'];
    this.alarmas = this.route.snapshot.data['alarmas'];
    this.centrosSanitarios = this.route.snapshot.data['centros_sanitarios']
    this.titleService.setTitle('Modificar centro sanitario en alarma' + this.idCentroSanitarioAlarma);


    this.centroSanitarioAlarma.id_alarma = this.centroSanitarioAlarma.id_alarma.id;
    this.centroSanitarioAlarma.id_centro_sanitario = this.centroSanitarioAlarma.id_centro_sanitario.id;

  }
  optionSelectedAlarma(i: number): void {
    document.getElementsByClassName('relacion_alarma_option')[i].setAttribute('selected', '');
  }
  optionSelectedCentro(i: number): void {
    document.getElementsByClassName('relacion_centro_option')[i].setAttribute('selected', '');
  }
  modificarCentroSanitarioAlarma(): void {
    this.cargarCentroSanitarioAlarma.modificarCentroSanitarioAlarma(this.centroSanitarioAlarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['centro_sanitario_alarma'])
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

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import { Alarma } from "../../../clases/alarma";
import { TipoAlarma } from "../../../clases/tipo-alarma";
import { Paciente } from "../../../clases/paciente";
import { Terminal } from "../../../clases/terminal";
import { CargaAlarmaService} from "../../../servicios/alarmas/carga-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-alarma-ucr',
  templateUrl: './crear-alarma-ucr.component.html',
  styleUrls: ['./crear-alarma-ucr.component.scss']
})
export class CrearAlarmaUcrComponent implements OnInit {
  public alarma: Alarma;
  public tipos_alarmas: TipoAlarma[];
  public pacientes_ucr: Paciente[];


  constructor(private titleService: Title, private route: ActivatedRoute, private cargaAlarma: CargaAlarmaService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva Alarma');
    this.alarma = new Alarma();
    this.tipos_alarmas = this.route.snapshot.data['tipos_alarmas'];
    this.pacientes_ucr = this.route.snapshot.data['pacientes_ucr'];
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

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaDispositivosAuxiliaresTerminalService
} from "../../../servicios/dispositivos-auxiliares-terminal/carga-dispositivos-auxiliares-terminal.service";
import {DispositivosAuxiliaresTerminal} from "../../../clases/dispositivos-auxiliares-terminal";
import {Terminal} from "../../../clases/terminal";
import {TipoAlarma} from "../../../clases/tipo-alarma";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-dispositivos-auxiliares-terminal',
  templateUrl: './crear-dispositivos-auxiliares-terminal.component.html',
  styleUrls: ['./crear-dispositivos-auxiliares-terminal.component.scss']
})
export class CrearDispositivosAuxiliaresTerminalComponent implements OnInit {
  public dispositivoAuxiliarTerminal: DispositivosAuxiliaresTerminal;
  public terminales: Terminal[];
  public tipo_alarmas: TipoAlarma[];

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router,
              private cargarDispositivosAuxiliaresTerminal: CargaDispositivosAuxiliaresTerminalService) { }

  ngOnInit(): void {
    this.dispositivoAuxiliarTerminal = new DispositivosAuxiliaresTerminal();
    this.terminales = this.route.snapshot.data['terminales'];
    this.tipo_alarmas = this.route.snapshot.data['tipo_alarmas'];
    this.titleService.setTitle('Crear dispositivo auxiliare terminal');

  }
  crearDispositivoAuxiliarTerminal(): void {
    this.cargarDispositivosAuxiliaresTerminal.nuevoDispositivoAuxiliarTerminal(this.dispositivoAuxiliarTerminal).subscribe(
      e => {

        this.alertExito()
        this.router.navigate(['/dispositivos_auxiliares_terminal'])
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

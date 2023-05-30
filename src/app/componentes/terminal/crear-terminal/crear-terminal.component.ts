import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Terminal } from "../../../clases/terminal";
import { Paciente} from "../../../clases/paciente";
import { TipoVivienda } from "../../../clases/tipo-vivienda";
import { CargaTerminalesService } from "../../../servicios/terminal/carga-terminales.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-crear-terminal',
  templateUrl: './crear-terminal.component.html',
  styleUrls: ['./crear-terminal.component.scss']
})
export class CrearTerminalComponent implements OnInit {
  public terminal: Terminal;
  public titulares: Paciente[];
  public tipo_vivienda: TipoVivienda[];
  constructor(private titleService: Title, private route: ActivatedRoute, private cargarTerminales: CargaTerminalesService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo Terminal');
    this.terminal = new Terminal();
    this.titulares = this.route.snapshot.data['titulares'];
    this.tipo_vivienda = this.route.snapshot.data['tipos_vivienda']
  }
  nuevoTerminal(): void {
    this.cargarTerminales.nuevoTerminal(this.terminal).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/terminales'])
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

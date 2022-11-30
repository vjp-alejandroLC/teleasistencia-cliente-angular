import {Component, Input, OnInit} from '@angular/core';
import {Terminal} from "../../../clases/terminal";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {CargaTerminalesService} from "../../../servicios/terminal/carga-terminales.service";

@Component({
  selector: 'app-item-terminal, [app-item-terminal]',
  templateUrl: './item-terminal.component.html',
  styleUrls: ['./item-terminal.component.scss']
})
export class ItemTerminalComponent implements OnInit {
  @Input() public terminal: Terminal;
  constructor( private router:Router, private cargarTerminal: CargaTerminalesService) { }

  ngOnInit(): void {
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
      title: environment.fraseEliminar,
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
      title: environment.fraseErrorEliminar
    })
  }

  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este terminal?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTerminal('terminales')
      }
    })
  }
  eliminarTerminal(ruta: string): void {
    this.cargarTerminal.eliminarTerminal(this.terminal).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.terminal.id,{skipLocationChange: true}).then(() => {
          this.router.navigate([ruta]);
        });
        this.alertExito()
      },
      error => {
        this.alertError()
      }
    )
  }
}

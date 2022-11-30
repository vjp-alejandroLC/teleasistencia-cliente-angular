import {Component, Input, OnInit} from '@angular/core';
import {RecursosComunitariosAlarma} from "../../../clases/recursos-comunitarios-alarma";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {
  CargaRecursosComunitariosAlarmaService
} from "../../../servicios/recursos-comunitarios-alarma/carga-recursos-comunitarios-alarma.service";

@Component({
  selector: 'app-item-recurso-comunitario-alarma, [app-item-recurso-comunitario-alarma]',
  templateUrl: './item-recurso-comunitario-alarma.component.html',
  styleUrls: ['./item-recurso-comunitario-alarma.component.scss']
})
export class ItemRecursoComunitarioAlarmaComponent implements OnInit {
  @Input() public recursoComunitarioAlarma: RecursosComunitariosAlarma
  constructor( private router:Router, private cargarRecrusoComunitarioAlarma: CargaRecursosComunitariosAlarmaService) { }

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
      title: '¿Está seguro que desea eliminar esta relación?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarRelacionTerminalRecursoComunitario('recursos_comunitarios_alarma')
      }
    })
  }
  eliminarRelacionTerminalRecursoComunitario(ruta: string): void {
    this.cargarRecrusoComunitarioAlarma.eliminarRecursosComunitariosAlarma(this.recursoComunitarioAlarma).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.recursoComunitarioAlarma.id,{skipLocationChange: true}).then(() => {
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

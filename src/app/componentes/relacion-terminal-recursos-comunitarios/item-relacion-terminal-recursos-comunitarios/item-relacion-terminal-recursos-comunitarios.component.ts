import {Component, Input, OnInit} from '@angular/core';
import { RelacionTerminalRecursoComunitarios} from "../../../clases/relacion-terminal-recurso-comunitarios";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "../../../servicios/relacion-terminal-recurso-comunitario/carga-relacion-terminal-recursos-comunitarios.service";

@Component({
  selector: 'app-item-relacion-terminal-recursos-comunitarios, [app-item-relacion-terminal-recursos-comunitarios]',
  templateUrl: './item-relacion-terminal-recursos-comunitarios.component.html',
  styleUrls: ['./item-relacion-terminal-recursos-comunitarios.component.scss']
})
export class ItemRelacionTerminalRecursosComunitariosComponent implements OnInit {
  @Input() public relacionRecurso: RelacionTerminalRecursoComunitarios;
  constructor( private router:Router, private cargarRelacionTerminalRecursoComunitario: CargaRelacionTerminalRecursosComunitariosService) { }

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
        this.eliminarRelacionTerminalRecursoComunitario('relacion_terminal_recurso_comunitario')
      }
    })
  }
  eliminarRelacionTerminalRecursoComunitario(ruta: string): void {
    this.cargarRelacionTerminalRecursoComunitario.eliminarRelacionRecurso(this.relacionRecurso).subscribe(
    e => {
      this.router.navigateByUrl(ruta+'/borrado/'+this.relacionRecurso.id,{skipLocationChange: true}).then(() => {
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

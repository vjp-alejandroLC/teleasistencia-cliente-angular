import {Component, Input, OnInit} from '@angular/core';
import { RelacionUsuarioCentro } from "../../../clases/relacion-usuario-centro";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {
  CargaRelacionUsuarioCentroService
} from "../../../servicios/relacion-usuario-centro/carga-relacion-usuario-centro.service";

@Component({
  selector: 'app-item-relacion-usuario-centro, [app-item-relacion-usuario-centro]',
  templateUrl: './item-relacion-usuario-centro.component.html',
  styleUrls: ['./item-relacion-usuario-centro.component.scss']
})
export class ItemRelacionUsuarioCentroComponent implements OnInit {
  @Input() public relacionUsuarioCentro: RelacionUsuarioCentro;
  constructor(private router:Router, private cargarRelacionUsuarioCentro: CargaRelacionUsuarioCentroService) { }

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
        this.eliminarRelacionTerminalRecursoComunitario('relaciones_usuario_centro')
      }
    })
  }
  eliminarRelacionTerminalRecursoComunitario(ruta: string): void {
    this.cargarRelacionUsuarioCentro.eliminarRelacionUsuarioCentro(this.relacionUsuarioCentro).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.relacionUsuarioCentro.id,{skipLocationChange: true}).then(() => {
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

import {Component, Input, OnInit} from '@angular/core';
import {ICopiaSeguridad} from "../../../interfaces/i-copia-seguridad";
import {Router} from "@angular/router";
import {CargaCopiaSeguridadService} from "../../../servicios/carga-copia-seguridad.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-item-copia-seguridad, [app-item-copia-seguridad]',
  templateUrl: './item-copia-seguridad.component.html',
  styleUrls: ['./item-copia-seguridad.component.scss']
})
export class ItemCopiaSeguridadComponent implements OnInit {
  @Input() public copia_seguridad: ICopiaSeguridad;

  constructor(private cargaCopias: CargaCopiaSeguridadService, private router: Router) { }

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
  alertRestaurar() :void {
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
      title: environment.fraseRestaurarCopia,
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

  //Modal para confirmar la eliminación de un elemento
  modalConfirmacion(): void {
    Swal.fire({
      title: environment.fraseEliminarModal,
      showCancelButton: true,
      confirmButtonColor: environment.colorAceptarModal,
      cancelButtonColor: environment.colorCancelarModal,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarCopia('/copia_seguridad')
      }
    })
  }
  //Un segundo modal por la necesidad propia de la entidad de gestion de la base de datos.
  modalRestauracion(): void {
    Swal.fire({
      title: "¿Desea restaurar la copia seleccionada?",
      showCancelButton: true,
      confirmButtonColor: environment.colorAceptarModal,
      cancelButtonColor: environment.colorCancelarModal,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.restaurarCopia('/copia_seguridad')
      }
    })
  }
  restaurarCopia(ruta: string): void {
    this.cargaCopias.restaurarCopiaConID(this.copia_seguridad).subscribe(
      e => {
        this.router.navigateByUrl(ruta, {skipLocationChange: true}).then(() => {
          this.router.navigate([ruta]);
        });
        //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
        this.alertRestaurar()

      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertError()
      }
    )
  }
  eliminarCopia(ruta: string): void {
    this.cargaCopias.borrarCopia(this.copia_seguridad).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.copia_seguridad.id, {skipLocationChange: true}).then(() => {
          this.router.navigate([ruta]);
        });
        //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
        this.alertExito()

      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertError()
      }
    )
  }
}

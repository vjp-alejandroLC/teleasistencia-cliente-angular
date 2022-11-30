import {Component, Input, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {ICopiaSeguridad} from "../../../interfaces/i-copia-seguridad";
import {CargaCopiaSeguridadService} from "../../../servicios/carga-copia-seguridad.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurar-copia-seguridad',
  templateUrl: './restaurar-copia-seguridad.component.html',
  styleUrls: ['./restaurar-copia-seguridad.component.scss']
})
export class RestaurarCopiaSeguridadComponent implements OnInit {
  @Input() public copia_seguridad: ICopiaSeguridad;


  constructor(private cargaCopias: CargaCopiaSeguridadService, private router: Router) { }

  ngOnInit(): void {}

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


  modalRestauracion(): void {
    Swal.fire({
      title:"¿Desea restaurar la base de datos?",
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
    this.cargaCopias.restaurarCopia().subscribe(
      e => {
        this.router.navigateByUrl(ruta, {skipLocationChange: true}).then(() => {
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

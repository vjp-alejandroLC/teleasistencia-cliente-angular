import {Component, Input, OnInit} from '@angular/core';
import {IHistoricoTipoSituacion} from "../../../interfaces/i-historico-tipo-situacion";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaHistoricoTipoSituacionService} from "../../../servicios/carga-historico-tipo-situacion.service";

@Component({
  selector: 'app-item-historico-tipo-situacion, [app-item-historico-tipo-situacion]',
  templateUrl: './item-historico-tipo-situacion.component.html',
  styleUrls: ['./item-historico-tipo-situacion.component.scss']
})
export class ItemHistoricoTipoSituacionComponent implements OnInit {
  @Input() public historico_tipo_situacion: IHistoricoTipoSituacion;
  constructor(private route: ActivatedRoute, private titleService: Title, private cargaHistoricoTipoSituacion: CargaHistoricoTipoSituacionService, private router: Router) { }

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
        this.eliminarHistoricoTipoSituacion('historico_situaciones')
      }
    })
  }

  //Metodo que llama al servicio delete, que elimina el elemento
  eliminarHistoricoTipoSituacion(ruta: string): void {
    this.cargaHistoricoTipoSituacion.borrarHistoricoTipoSituacion(this.historico_tipo_situacion.id).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.historico_tipo_situacion.id, {skipLocationChange: true}).then(() => {
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

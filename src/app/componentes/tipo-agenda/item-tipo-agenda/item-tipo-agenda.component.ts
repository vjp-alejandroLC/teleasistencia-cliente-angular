import {Component, Input, OnInit} from '@angular/core';
import {ITipoAgenda} from "../../../interfaces/i-tipo-agenda";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoAgendaService} from "../../../servicios/carga-tipo-agenda.service";

@Component({
  selector: 'app-item-tipo-agenda, [app-item-tipo-agenda]',
  templateUrl: './item-tipo-agenda.component.html',
  styleUrls: ['./item-tipo-agenda.component.scss']
})
export class ItemTipoAgendaComponent implements OnInit {
  @Input() public tipo_agenda: ITipoAgenda;
  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTipoAgenda: CargaTipoAgendaService, private router: Router) { }

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
        this.eliminarTipoAgenda('tipo_agenda')
      }
    })
  }

  //Metodo que llama al servicio delete, que elimina el elemento
  eliminarTipoAgenda(ruta: string): void {
    this.cargaTipoAgenda.borrarTipoAgenda(this.tipo_agenda.id).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.tipo_agenda.id, {skipLocationChange: true}).then(() => {
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

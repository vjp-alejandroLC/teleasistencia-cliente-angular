import {Component, Input, OnInit} from '@angular/core';
import {CentroSanitarioAlarma} from "../../../clases/centro-sanitario-alarma";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {
  CargaCentroSanitarioAlarmaService
} from "../../../servicios/centro-sanitario-alarma/carga-centro-sanitario-alarma.service";

@Component({
  selector: 'app-item-centro-sanitario-alarma, [app-item-centro-sanitario-alarma]',
  templateUrl: './item-centro-sanitario-alarma.component.html',
  styleUrls: ['./item-centro-sanitario-alarma.component.scss']
})
export class ItemCentroSanitarioAlarmaComponent implements OnInit {
  @Input() public centroSanitarioAlarma: CentroSanitarioAlarma;
  constructor(private router:Router, private cargarCentroSanitarioAlarma: CargaCentroSanitarioAlarmaService) { }

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
        this.eliminarCentroSanitarioAlarma('centro_sanitario_alarma')
      }
    })
  }
  eliminarCentroSanitarioAlarma(ruta: string): void {
    this.cargarCentroSanitarioAlarma.eliminarCentroSanitarioAlarma(this.centroSanitarioAlarma).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.centroSanitarioAlarma.id,{skipLocationChange: true}).then(() => {
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

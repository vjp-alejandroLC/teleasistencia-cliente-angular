import { Component,Input, OnInit } from '@angular/core';
import {PersonaContactoAlarma} from "../../../clases/persona-contacto-alarma";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {
  CargaPersonaContactoAlarmaService
} from "../../../servicios/persona-contacto-alarma/carga-persona-contacto-alarma.service";

@Component({
  selector: 'app-item-persona-contacto-alarma, [app-item-persona-contacto-alarma]',
  templateUrl: './item-persona-contacto-alarma.component.html',
  styleUrls: ['./item-persona-contacto-alarma.component.scss']
})
export class ItemPersonaContactoAlarmaComponent implements OnInit {
  @Input() public personaContactoAlarma: PersonaContactoAlarma
  constructor( private router:Router, private cargarPersonaContactoAlarma: CargaPersonaContactoAlarmaService) { }

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
        this.eliminarRelacionTerminalRecursoComunitario('personas_contacto_alarma')
      }
    })
  }
  eliminarRelacionTerminalRecursoComunitario(ruta: string): void {
    this.cargarPersonaContactoAlarma.eliminarPersonaContactoAlarma(this.personaContactoAlarma).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.personaContactoAlarma.id,{skipLocationChange: true}).then(() => {
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

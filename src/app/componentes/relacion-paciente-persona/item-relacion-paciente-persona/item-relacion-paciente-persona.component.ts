import {Component, Input, OnInit} from '@angular/core';
import { RelacionPacientePersona } from "../../../clases/relacion-paciente-persona";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {
  CargaRelacionPacientePersonaService
} from "../../../servicios/relacion-paciente-persona/carga-relacion-paciente-persona.service";

@Component({
  selector: 'app-item-relacion-paciente-persona, [app-item-relacion-paciente-persona]',
  templateUrl: './item-relacion-paciente-persona.component.html',
  styleUrls: ['./item-relacion-paciente-persona.component.scss']
})
export class ItemRelacionPacientePersonaComponent implements OnInit {
  @Input() public relacionPacientePersona: RelacionPacientePersona
  constructor(private router:Router, private cargarRelacionPacientePersona: CargaRelacionPacientePersonaService) { }

  ngOnInit(): void {
  }
  comprobarLlaves(): string {
    if (this.relacionPacientePersona.tiene_llaves_vivienda == true) {
      return 'Sí'
    }
    return  'No'
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
        this.eliminarRelacionTerminalRecursoComunitario('relacion_paciente_persona')
      }
    })
  }
  eliminarRelacionTerminalRecursoComunitario(ruta: string): void {
    this.cargarRelacionPacientePersona.eliminarRelacionPacientePersona(this.relacionPacientePersona).subscribe(
      e => {
        this.router.navigateByUrl(ruta+'/borrado/'+this.relacionPacientePersona.id,{skipLocationChange: true}).then(() => {
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

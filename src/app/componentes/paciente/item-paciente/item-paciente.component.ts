import {Component, Input, OnInit} from '@angular/core';
import {Paciente} from "../../../clases/paciente";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {CargaPacienteService} from "../../../servicios/paciente/carga-paciente.service";
import {
  CargaUsuariosDelServicioService
} from "../../../servicios/usuarios-del-servicio/carga-usuarios-del-servicio.service";

@Component({
  selector: 'app-item-paciente, [app-item-paciente]',
  templateUrl: './item-paciente.component.html',
  styleUrls: ['./item-paciente.component.scss']
})
export class ItemPacienteComponent implements OnInit {

  @Input() public paciente: Paciente;

  constructor(private router: Router, private cargaUsuarios: CargaUsuariosDelServicioService) {
  }

  ngOnInit(): void {
  }

  comprobarUcr(): string {
    if (this.paciente.tiene_ucr == true) {
      return 'Sí'
    }
    return 'No'
  }

  //Toast para el Alert indicando que la operación fue exitosa
  alertExito(): void {
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
  alertError(): void {
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
      title: '¿Está seguro que desea eliminar este usuario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarRelacionTerminalRecursoComunitario('usuarios_del_servicio/consultar')
      }
    })
  }

  eliminarRelacionTerminalRecursoComunitario(ruta: string): void {
    this.cargaUsuarios.delUsuario(this.paciente.id).subscribe(
      e => {
        this.router.navigateByUrl(ruta + '/borrado/' + this.paciente.id, {skipLocationChange: true}).then(() => {
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

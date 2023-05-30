import { Component, OnInit } from '@angular/core';
import {RelacionTerminalRecursoComunitarios} from "../../../clases/relacion-terminal-recurso-comunitarios";
import {Terminal} from "../../../clases/terminal";
import {RecursoComunitario} from "../../../clases/recurso-comunitario";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "../../../servicios/relacion-terminal-recurso-comunitario/carga-relacion-terminal-recursos-comunitarios.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-relacion-terminal-recursos-comunitarios',
  templateUrl: './crear-relacion-terminal-recursos-comunitarios.component.html',
  styleUrls: ['./crear-relacion-terminal-recursos-comunitarios.component.scss']
})
export class CrearRelacionTerminalRecursosComunitariosComponent implements OnInit {
  public relacion_terminal_recursos_comunitarios: RelacionTerminalRecursoComunitarios;
  public relaciones_recursos_comunitarios: RecursoComunitario[];
  public relaciones_terminales: Terminal[];

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargaRelacionTerminalRecursosComunitarios: CargaRelacionTerminalRecursosComunitariosService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva relacion de terminal y recurso comunitario');
    this.relacion_terminal_recursos_comunitarios = new RelacionTerminalRecursoComunitarios();
    this.relaciones_terminales = this.route.snapshot.data['relaciones_terminales']
    this.relaciones_recursos_comunitarios = this.route.snapshot.data['relaciones_recursos_comunitarios']
  }
  nuevaRelacionTerminalRecurso(): void {
    this.cargaRelacionTerminalRecursosComunitarios.nuevaRelacionRecurso(this.relacion_terminal_recursos_comunitarios).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/relacion_terminal_recurso_comunitario'])
      },
      error => {
        this.alertError()
      }
    );
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
      title: environment.fraseCrear,
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
      title: environment.fraseErrorCrear
    })
  }
}

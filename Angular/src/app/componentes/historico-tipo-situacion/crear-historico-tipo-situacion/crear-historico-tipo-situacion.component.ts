import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {IHistoricoTipoSituacion} from "../../../interfaces/i-historico-tipo-situacion";
import {CargaHistoricoTipoSituacionService} from "../../../servicios/carga-historico-tipo-situacion.service";
import {HistoricoTipoSituacion} from "../../../clases/historico-tipo-situacion";
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";
import {ITerminal} from "../../../interfaces/i-terminal";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-historico-tipo-situacion',
  templateUrl: './crear-historico-tipo-situacion.component.html',
  styleUrls: ['./crear-historico-tipo-situacion.component.scss']
})
export class CrearHistoricoTipoSituacionComponent implements OnInit {

  public historico_tipo_situacion: IHistoricoTipoSituacion;
  public tipos_situaciones: ITipoSituacion[];
  public terminales: ITerminal[];

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private cargaHistoricoTipoSituacion: CargaHistoricoTipoSituacionService,
              private router: Router) { }

  // Carga de datos.
  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo agenda');
    this.historico_tipo_situacion = new HistoricoTipoSituacion();
    this.tipos_situaciones = this.route.snapshot.data['tipos_situaciones'];
    this.terminales = this.route.snapshot.data['terminales'];
  }

  // Petición al servidor para crear un nuevo histórico de tipo de situación.
  crearHistoricoTipoSituacion() {
    this.cargaHistoricoTipoSituacion.nuevoHistoricoTipoSituacion(this.historico_tipo_situacion).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/historico_situaciones']);
      },
      error => {
        this.alertError();
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

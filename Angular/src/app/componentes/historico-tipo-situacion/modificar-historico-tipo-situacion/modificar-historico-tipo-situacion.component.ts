import { Component, OnInit } from '@angular/core';
import {ITipoAgenda} from "../../../interfaces/i-tipo-agenda";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaHistoricoTipoSituacionService} from "../../../servicios/carga-historico-tipo-situacion.service";
import {IHistoricoTipoSituacion} from "../../../interfaces/i-historico-tipo-situacion";
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";
import {ITerminal} from "../../../interfaces/i-terminal";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-modificar-historico-tipo-situacion',
  templateUrl: './modificar-historico-tipo-situacion.component.html',
  styleUrls: ['./modificar-historico-tipo-situacion.component.scss']
})
export class ModificarHistoricoTipoSituacionComponent implements OnInit {

  public historico_tipo_situacion: IHistoricoTipoSituacion;
  public idHistoricoTipoSituacion: number;
  public tipos_situaciones: ITipoSituacion[];
  public terminales: ITerminal[];


  constructor(private route: ActivatedRoute, private titleService: Title, private cargaHistoricoTipoSituacion: CargaHistoricoTipoSituacionService, private router: Router) {
  }

  // Carga de los datos necesarios para que se muestren correctamente en el formulario a la hora de modificar.
  ngOnInit(): void {
    this.historico_tipo_situacion = this.route.snapshot.data['historico_situacion'];
    this.idHistoricoTipoSituacion = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo agenda ' + this.idHistoricoTipoSituacion);
    this.tipos_situaciones = this.route.snapshot.data['tipos_situaciones'];
    this.terminales = this.route.snapshot.data['terminales'];
    this.historico_tipo_situacion.id_tipo_situacion = this.historico_tipo_situacion.id_tipo_situacion.id;
    this.historico_tipo_situacion.id_terminal = this.historico_tipo_situacion.id_terminal.id;
  }

  // Lanza una petición al servidor para modificar un histórico de tipo de situación seleccionado.
  modificarHistoricoTipoDeSituacion(): void {
    this.cargaHistoricoTipoSituacion.modificarHistoricoTipoSituacion(this.historico_tipo_situacion).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/historico_situaciones']);
      },
      error => {
        this.alertError();
      }
    );
  }

  // Método para marcar como 'selected' el option que coincide con el valor de la agenda seleccionada.
  optionSelected(i: number): void {
    document.getElementsByClassName('tipo_historico_situacion_option')[i].setAttribute('selected', '');
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
      title: environment.fraseModificar,
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
      title: environment.fraseErrorModificar
    })
  }

}

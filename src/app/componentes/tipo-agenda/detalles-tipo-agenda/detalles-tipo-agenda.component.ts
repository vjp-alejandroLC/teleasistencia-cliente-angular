import { Component, OnInit } from '@angular/core';
import {ITipoAgenda} from "../../../interfaces/i-tipo-agenda";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoAgendaService} from "../../../servicios/carga-tipo-agenda.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-detalles-tipo-agenda',
  templateUrl: './detalles-tipo-agenda.component.html',
  styleUrls: ['./detalles-tipo-agenda.component.scss']
})
export class DetallesTipoAgendaComponent implements OnInit {

  public tipo_agenda: ITipoAgenda;
  public tipos_agenda: ITipoAgenda[];
  public idTipoAgenda: number;
  public importanciaArray = ['Urgente', 'Importante'];

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTipoAgendaService: CargaTipoAgendaService, private router: Router) {
  }

  // Carga de los datos para que se muestren correctamente en el formulario a la hora de modificar un tipo de agenda.
  ngOnInit(): void {
    this.tipo_agenda = this.route.snapshot.data['tipo_agenda'];
    this.idTipoAgenda = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo agenda ' + this.idTipoAgenda);
    this.tipos_agenda = this.route.snapshot.data['tipos_agenda'];
  }

  // Lanza una petición al servidor para modificar un tipo de agenda.
  modificarTipoAgenda(): void {
    this.cargaTipoAgendaService.modificarTipoAgenda(this.tipo_agenda).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/tipo_agenda']);
      },
      error => {
        this.alertError();
      }
    );
  }

  // Método para marcar como 'selected' el option que coincide con el valor de la agenda seleccionada.
  optionSelected(i: number): void {
    document.getElementsByClassName('tipo_agenda_option')[i].setAttribute('selected', '');
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

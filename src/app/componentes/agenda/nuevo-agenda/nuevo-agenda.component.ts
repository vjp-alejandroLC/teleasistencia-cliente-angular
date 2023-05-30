import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {IAgenda} from "../../../interfaces/i-agenda";
import {Agenda} from "../../../clases/agenda";
import {CargaAgendaService} from "../../../servicios/carga-agenda.service";
import {ITipoAgenda} from "../../../interfaces/i-tipo-agenda";
import {IPersona} from "../../../interfaces/i-persona";
import {IPaciente} from "../../../interfaces/i-paciente";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-nuevo-agenda',
  templateUrl: './nuevo-agenda.component.html',
  styleUrls: ['./nuevo-agenda.component.scss']
})
export class NuevoAgendaComponent implements OnInit {

  public agenda: IAgenda;
  public tipos_agenda: ITipoAgenda[];
  public personas_contacto: IPersona[];
  public pacientes: IPaciente[];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private cargaAgendas: CargaAgendaService,
    private router: Router
  ) { }

  // Carga de los datos para poder rellenar el formulario de creación.
  ngOnInit(): void {
    this.tipos_agenda = this.route.snapshot.data['tipos_agenda'];
    this.personas_contacto = this.route.snapshot.data['personas'];
    this.titleService.setTitle('Nuevo agenda');
    this.agenda = new Agenda();
    this.pacientes = this.route.snapshot.data['pacientes'];
  }

  // Método para marcar como 'selected' el option que coincide con el valor de la agenda seleccionada.
  optionSelected(i: number): void {
    document.getElementsByClassName('tipo_agenda_option')[i].setAttribute('selected', '');
  }

  // Método que realiza la petición al servidor de creación de una agenda.
  nuevoAgenda() {
    this.cargaAgendas.nuevoAgenda(this.agenda).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/agenda']);
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

import { Component, OnInit } from '@angular/core';
import {IAgenda} from "../../../interfaces/i-agenda";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {ITipoAgenda} from "../../../interfaces/i-tipo-agenda";
import {IPaciente} from "../../../interfaces/i-paciente";
import {IPersona} from "../../../interfaces/i-persona";
import {CargaAgendaService} from "../../../servicios/carga-agenda.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modificar-agenda',
  templateUrl: './modificar-agenda.component.html',
  styleUrls: ['./modificar-agenda.component.scss']
})
export class ModificarAgendaComponent implements OnInit {

  public agenda: IAgenda;
  public idAgenda: number;
  public tipos_agenda: ITipoAgenda[];
  public pacientes: IPaciente[];
  public personas_contacto: IPersona[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private cargaAgendaService: CargaAgendaService,
    private router: Router
  ) { }

  // Carga de los datos al cargar el componente
  ngOnInit(): void {
    this.agenda = this.route.snapshot.data['agenda'];
    this.tipos_agenda = this.route.snapshot.data['tipos_agenda'];
    this.idAgenda = this.route.snapshot.params['id'];
    this.pacientes = this.route.snapshot.data['pacientes'];
    this.personas_contacto = this.route.snapshot.data['personas_contacto'];
    this.titleService.setTitle('Modificar agenda ' + this.idAgenda);

    this.agenda.id_tipo_agenda = this.agenda.id_tipo_agenda.id;
    this.agenda.id_paciente = this.agenda.id_paciente.id;
    this.agenda.id_persona = this.agenda.id_persona.id;
  }

  // Método que realiza la petición al servidor de modificación de una agenda seleccionada
  modificarEventoAgenda(): void {
    this.cargaAgendaService.modificarAgenda(this.agenda).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/agenda']);
      },
      error => {
        this.alertError();
      }
    );
  }

  // Método para marcar como 'selected' el option que coincide con el valor de la agenda seleccionada.
  optionSelected(i: number): void {
    document.getElementsByClassName('agenda_option')[i].setAttribute('selected', '');
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

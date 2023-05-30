import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {IHistoricoAgenda} from "../../../interfaces/i-historico-agenda";
import {IAgenda} from "../../../interfaces/i-agenda";
import {CargaHistoricoAgendaService} from "../../../servicios/carga-historico-agenda.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modificar-historico-agenda',
  templateUrl: './modificar-historico-agenda.component.html',
  styleUrls: ['./modificar-historico-agenda.component.scss']
})
export class ModificarHistoricoAgendaComponent implements OnInit {

  public historico_agenda: IHistoricoAgenda;
  public id_historico_agenda: number;
  public agendas: IAgenda[];
  public teleoperadores: any[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private cargaHistoricoAgenda: CargaHistoricoAgendaService,
    private router: Router
  ) {}

  // Carga de los datos necesarios al cargar el componente.
  ngOnInit(): void {
    this.historico_agenda = this.route.snapshot.data['historico_agenda'];
    this.id_historico_agenda = this.route.snapshot.params['id'];
    this.agendas = this.route.snapshot.data['agendas'];
    this.teleoperadores = this.route.snapshot.data['teleoperadores'];
    this.historico_agenda.id_agenda = this.historico_agenda.id_agenda.id;
    this.historico_agenda.id_teleoperador = this.historico_agenda.id_teleoperador.id;
  }

  // Petición al servidor para modificar un histórico de agenda seleccionado
  modificarHistoricoDeAgenda(): void {
    this.cargaHistoricoAgenda.modificarHistoricoAgenda(this.historico_agenda).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/historico_agenda']);
      },
      error => {
        this.alertError();
      }
    );
  }

  // Método para marcar como 'selected' el option que coincide con el valor de la agenda seleccionada.
  optionSelected(i: number): void {
    document.getElementsByClassName('historico_agenda_option')[i].setAttribute('selected', '');
  }

  // Método para marcar como 'selected' el option que coincide con el valor de la agenda seleccionada.
  optionSelectedTeleoperador(i: number): void {
    document.getElementsByClassName('historico_agenda_option_teleoperador')[i].setAttribute('selected', '');
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

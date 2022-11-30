import { Component, OnInit } from '@angular/core';
import {ITipoAgenda} from "../../../interfaces/i-tipo-agenda";
import {TipoAgenda} from "../../../clases/tipo-agenda";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoAgendaService} from "../../../servicios/carga-tipo-agenda.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-nuevo-tipo-agenda',
  templateUrl: './nuevo-tipo-agenda.component.html',
  styleUrls: ['./nuevo-tipo-agenda.component.scss']
})
export class NuevoTipoAgendaComponent implements OnInit {
  public tipo_agenda: ITipoAgenda;
  public importanciaArray = ['Urgente', 'Importante'];

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposAgenda: CargaTipoAgendaService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo agenda');
    this.tipo_agenda = new TipoAgenda();
  }

  // Método que lanza una petición al servidor para crear un nuevo tipo de agenda.
  nuevoTipoAgenda() {
    this.cargaTiposAgenda.nuevoTipoAgenda(this.tipo_agenda).subscribe(
      e => {
        this.alertExito();
        this.router.navigate(['/tipo_agenda']);
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

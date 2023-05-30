import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Alarma } from "../../../clases/alarma";
import { User } from "../../../clases/user";
import { CargaAlarmaService } from "../../../servicios/alarmas/carga-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-modificar-teleoperador-alarma',
  templateUrl: './modificar-teleoperador-alarma.component.html',
  styleUrls: ['./modificar-teleoperador-alarma.component.scss']
})
export class ModificarTeleoperadorAlarmaComponent implements OnInit {
  public alarma: Alarma
  public idAlarma: number
  public teleoperadores: User[];

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargarAlarmas: CargaAlarmaService) { }

  ngOnInit(): void {
    this.alarma = this.route.snapshot.data['alarma'];
    this.idAlarma = this.route.snapshot.params['id'];
    this.teleoperadores = this.route.snapshot.data['teleoperadores'];
    this.alarma.id_teleoperador = this.alarma.id_teleoperador.id;
    this.titleService.setTitle("Editar teleoperador en alarma")

  }
  modificarTeleoperador(): void {
    this.cargarAlarmas.modificarAlarma(this.alarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/alarmas'])
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

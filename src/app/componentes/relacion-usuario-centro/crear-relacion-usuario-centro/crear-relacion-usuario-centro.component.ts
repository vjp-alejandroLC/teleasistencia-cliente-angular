import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaRelacionUsuarioCentroService
} from "../../../servicios/relacion-usuario-centro/carga-relacion-usuario-centro.service";
import {RelacionUsuarioCentro} from "../../../clases/relacion-usuario-centro";
import {Paciente} from "../../../clases/paciente";
import {CentroSanitario} from "../../../clases/centro-sanitario";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-relacion-usuario-centro',
  templateUrl: './crear-relacion-usuario-centro.component.html',
  styleUrls: ['./crear-relacion-usuario-centro.component.scss']
})
export class CrearRelacionUsuarioCentroComponent implements OnInit {
  public relacionUsuarioCentro: RelacionUsuarioCentro;
  public pacientes: Paciente[];
  public centrosSanitario: CentroSanitario[];
  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router,
              private cargarRelacionUsuarioCentro: CargaRelacionUsuarioCentroService) { }

  ngOnInit(): void {
    this.relacionUsuarioCentro = new RelacionUsuarioCentro();
    this.pacientes = this.route.snapshot.data['pacientes'];
    this.centrosSanitario = this.route.snapshot.data['centros_sanitarios']
    this.titleService.setTitle('Crear relacion usuario centro' );
  }
  nuevaRelacionUsuarioCentro(): void {
    this.cargarRelacionUsuarioCentro.nuevaRelacionUsuarioCentro(this.relacionUsuarioCentro).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/relaciones_usuario_centro'])
      },
      error => {
        this.alertError()
      }
    )
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

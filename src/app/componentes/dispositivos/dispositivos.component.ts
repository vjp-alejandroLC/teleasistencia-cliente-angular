import {Component, OnInit} from '@angular/core';
import {TipoSituacion} from "../../clases/tipo-situacion";
import {CargaTipoSituacionService} from "../../servicios/carga-tipo-situacion.service";
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ITipoAlarma} from "../../interfaces/i-tipo-alarma";
import Swal from "sweetalert2";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  /*  Atributos  */
  public listaDeSituaciones: ITipoSituacion[];
  public formulario: FormGroup;
  public opcion: boolean;
  public opcion2: boolean;
  public opcion3: boolean;
  public listaPerifericos: ITipoAlarma[];
  public mostrar: boolean = false;
  public mostrarModificar: boolean = false;


  constructor(private situaciones: CargaTipoSituacionService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.listaDeSituaciones = this.route.snapshot.data['tipos_situaciones'];
    this.listaPerifericos = this.route.snapshot.data['tipos_perifericos'];

    this.buildForm();  //Formularios reactivos
  }

  /* formulario reactivo */
  private buildForm() {
    this.formulario = this.formBuilder.group({
      fecha_alta: ['', [Validators.required,
        validacionFechaMaxima()]],
      situacion: ['', [Validators.required]],
      numero_terminal: ['', [Validators.required]],
      modelo_terminal: ['', [Validators.required]],
      ucr: ['', [Validators.required]],
      periferico: ['', [Validators.required]],
      tienePerifericos: ['', [Validators.required]],
      tieneTeleasistencia: ['', [Validators.required]],

    });
  }


  getToday() {
    return new Date().toISOString().split("T")[0];
  }

  get controles() {
    return this.formulario.controls;
  }

  //Tiene UCR
  elegirOpcion(eleccion, boolean) {
    switch (eleccion) {
      case '1': {
        this.opcion = !!boolean;
        break;
      }
      case '2': {
        this.opcion2 = !!boolean;
        break;
      }
      case '3': {
        this.opcion3 = !!boolean;
        break;
      }
      default : {
      }
    }
  }

  //funciones paneles laterales
  desactivado() {
    return (this.formulario.value.situacion == '') || (this.formulario.value.situacion == null);
  }

  mostratCrearTipo() {
    this.mostrar = !this.mostrar;
  }

  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta Situacion?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoSituacion()
      }
    })
  }


  private eliminarTipoSituacion() {

    console.log("tipo situacion -->" + this.formulario.value.situacion)

    this.situaciones.eliminarTipoSituacion(this.formulario.value.situacion).subscribe(
      e => {
        //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
        this.alertExitoBorrar()
      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertErrorBorrar()
      },
      () => {
        this.actualizarTiposSituaciones();
      }
    )
  }


  //FUNCION PARA REFRESACAR LOS TIPOS ADE ALARMA A TIEMPO REAL (SIN RECARGAR LA PAGINA)
  actualizarTiposSituaciones(id_tipo_situacion = null) {
    //peticion para refrescar los tipos de alarmas
    this.situaciones.getTiposSituaciones().subscribe(
      lista => {
        this.listaDeSituaciones = lista;
        this.formulario.patchValue({tipo_situacion: id_tipo_situacion})
      },
      error => {
      },
    );
  }


  //Alertas

  //Toast para el Alert indicando que la operación fue exitosa
  alertExito(): void {
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
  alertError(): void {
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

  alertExitoBorrar(): void {
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
      title: environment.fraseEliminar,
    })
  }

  alertErrorBorrar(): void {
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
      title: environment.fraseErrorEliminar
    })
  }


}

export function validacionFechaMaxima(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (new Date(control.value) > new Date()) {
      return {fechaExcedida: true};
    }
    return null;
  }
}

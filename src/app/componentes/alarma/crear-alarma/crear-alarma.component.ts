import { Component, OnInit } from '@angular/core';
import {Alarma} from "../../../clases/alarma";
import {TipoAlarma} from "../../../clases/tipo-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaAlarmaService} from "../../../servicios/alarmas/carga-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Terminal} from "../../../clases/terminal";
import {Paciente} from "../../../clases/paciente";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CargaTipoAlarmaService} from "../../../servicios/carga-tipo-alarma.service";

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.scss']
})
export class CrearAlarmaComponent implements OnInit {

  public alarma: Alarma;
  public tipos_alarmas: TipoAlarma[];
  public terminales: Terminal[];
  public pacientes_ucr: Paciente[];
  public mostrar: boolean = false;
  public terminal: boolean = true;
  public formCrearA: FormGroup;
  public mostrarModificar: boolean = false;
  // public pacientes_ucr: Paciente[];
  // public fecha_actual = new Date();
  // public anno_actual = this.fecha_actual.getFullYear();
  // public mes_actual = this.fecha_actual.getMonth() + 1;
  // public dia_actual = this.fecha_actual.getDate();




  constructor(private titleService: Title, private route: ActivatedRoute, private cargaAlarma: CargaAlarmaService, private router: Router, private formBuilder: FormBuilder,private cargaTipoAlarma: CargaTipoAlarmaService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva Alarma');
    this.alarma = new Alarma();
    this.tipos_alarmas = this.route.snapshot.data['tipos_alarmas'];
    this.terminales = this.route.snapshot.data['terminales'];
    this.pacientes_ucr = this.route.snapshot.data['pacientes_ucr'];
    // this.alarma.id_teleoperador = null;
    //FORMULARIO REACTIVO
    this.formCrearA = this.formBuilder.group({
      tipos_alarma: ['',Validators.required],
      id_terminal: [''],
      id_paciente_ucr: [''],
    });
  }

  nuevaAlarma(): void {
    let data
    if(this.terminal == true) {
      data = {
        id_tipo_alarma: this.formCrearA.value.tipos_alarma,
        id_terminal: this.formCrearA.value.id_terminal
      }
      console.log("TERMINAL: ");
      console.log(data);
    }else{
      data = {
        id_tipo_alarma: this.formCrearA.value.tipos_alarma,
        id_paciente_ucr: this.formCrearA.value.id_paciente_ucr
      }
      console.log("PACIENTE: ");
      console.log(data);
    }
    this.cargaAlarma.nuevaAlarma(data).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/alarmas'])
      },
      error => {
        this.alertError()
      }
    )
  }
  //ALERT DE CREAR UNA ALARMA
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
  mostratCrearTipo(){
    this.mostrar = !this.mostrar;
  }
  mostrarEditarTipo(){
    this.mostrarModificar = !this.mostrarModificar;
  }
  botonDes(){
    if(this.formCrearA.value.tipos_alarma == ''){
      return true;
    }else{
      return false;
    }
  }
  elegirAlarma(terminal){
    if(!terminal){
      this.terminal = false;
    }else {
      this.terminal = true;
    }
  }
  //ALERT DE BORRAR UN TIPO DE ALARMA
  alertExitoBorrar() :void {
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
  //Toast para el alert indicando que hubo algún error en la operación
  alertErrorBorrar() :void {
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
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de alarma?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoAlarma()
      }
    })
  }
  eliminarTipoAlarma(){
    this.cargaTipoAlarma.eliminarTipoAlarma(this.formCrearA.value.tipos_alarma).subscribe(
      e=>{
        //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
        this.alertExitoBorrar()
      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertErrorBorrar()
      },
      ()=>{
          //peticion para refrescar los tipos de alarmas
          this.cargaTipoAlarma.getTiposAlarmas().subscribe(
            lista => {
              this.tipos_alarmas = lista;
            },
            error => {},
            ()=>{
              this.formCrearA.reset();
            }
            );
      }
    )
  }
}

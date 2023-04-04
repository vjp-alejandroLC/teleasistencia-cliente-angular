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

@Component({
  selector: 'app-crear-alarma-terminal',
  templateUrl: './crear-alarma-terminal.component.html',
  styleUrls: ['./crear-alarma-terminal.component.scss']
})
export class CrearAlarmaTerminalComponent implements OnInit {

  public alarma: Alarma;
  public tipos_alarmas: TipoAlarma[];
  public terminales: Terminal[];
  public pacientes_ucr: Paciente[];
  public mostrar: boolean = false;
  public terminal: boolean = true;
  public formEdit: FormGroup;
  public mostrarModificar: boolean = false;
  // public pacientes_ucr: Paciente[];
  // public fecha_actual = new Date();
  // public anno_actual = this.fecha_actual.getFullYear();
  // public mes_actual = this.fecha_actual.getMonth() + 1;
  // public dia_actual = this.fecha_actual.getDate();




  constructor(private titleService: Title, private route: ActivatedRoute, private cargaAlarma: CargaAlarmaService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva Alarma');
    this.alarma = new Alarma();
    this.tipos_alarmas = this.route.snapshot.data['tipos_alarmas'];
    this.terminales = this.route.snapshot.data['terminales'];
    this.pacientes_ucr = this.route.snapshot.data['pacientes_ucr'];
    // this.alarma.id_teleoperador = null;
    //FORMULARIO REACTIVO
    this.formEdit = this.formBuilder.group({
      tipos_alarma: ['',Validators.required],
      id_terminal: [''],
      id_paciente_ucr: [''],
    });
  }

  nuevaAlarma(): void {
    let data
    if(this.terminal == true) {
      data = {
        id_tipo_alarma: this.formEdit.value.tipos_alarma,
        id_terminal: this.formEdit.value.id_terminal
      }
      console.log("TERMINAL: ");
      console.log(data);
    }else{
      data = {
        id_tipo_alarma: this.formEdit.value.tipos_alarma,
        id_paciente_ucr: this.formEdit.value.id_paciente_ucr
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
  botonDes(id: any){
    if(id == ''){
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
}

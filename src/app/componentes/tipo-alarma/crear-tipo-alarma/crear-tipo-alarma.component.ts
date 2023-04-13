import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITipoAlarma} from '../../../interfaces/i-tipo-alarma';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoAlarmaService} from '../../../servicios/carga-tipo-alarma.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-crear-tipo-alarma',
  templateUrl: './crear-tipo-alarma.component.html',
  styleUrls: ['./crear-tipo-alarma.component.scss']
})

export class CrearTipoAlarmaComponent implements OnInit {
  public tipo_alarma: ITipoAlarma;
  public listaAlarmas : ITipoAlarma[];
  public opcion: boolean = true;
  public clasificaciones_alarmas: IClasificacionAlarma[];
  @Output () mostrar = new EventEmitter;
  @Output () tipos_alarmas = new EventEmitter;
  @Output () alarma_creada= new EventEmitter;
  public formCrear: FormGroup;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formCrear = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.maxLength(200)]],
      codigo:['',[Validators.required,Validators.pattern(/[A-Z & 0-9]+$/),Validators.maxLength(200)]],
      es_dispositivo:[true,Validators.required],
      id_clasificacion_alarma:['',Validators.required],
    });
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
  }
  get f(){
    return this.formCrear.controls;
  }
  //Funcion para eleccion si es un dispositivo ( SI O NO)
  elegirOpcion(opcion){
    if(!opcion){
      this.opcion = false;
    }else {
      this.opcion = true;
    }
  }
  nuevoTipoAlarma(): void {
    this.cargaTiposAlarmas.nuevoTipoAlarma(this.formCrear.value).subscribe(
      e => {
        this.alertExito()
      },
      error => {
        this.alertError()
      },
      ()=>{
        this.formCrear.reset();
        this.formCrear.get('es_dispositivo').setValue(true);
        this.opcion = true;
        this.refrescar();
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
  refrescar(){
    //peticion para refrescar los tipos de alarmas
    this.cargaTiposAlarmas.getTiposAlarmas().subscribe(
      lista => {
        this.listaAlarmas = lista;
      },
      error => {},
    ()=> {
        //pasamos el array al padre para que se actualice al instante
      this.tipos_alarmas.emit(this.listaAlarmas);
      this.alarma_creada.emit(this.listaAlarmas.slice(-1).pop().id);
      this.mostrar.emit(!this.mostrar);
      console.log(this.listaAlarmas.slice(-1).pop().id);

    });
  }
  mostratCrearTipo(){
    this.mostrar.emit(!this.mostrar);
  }
}

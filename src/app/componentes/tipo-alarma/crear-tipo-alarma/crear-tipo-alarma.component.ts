import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITipoAlarma} from '../../../interfaces/i-tipo-alarma';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoAlarmaService} from '../../../servicios/carga-tipo-alarma.service';
import {TipoAlarma} from '../../../clases/tipo-alarma';
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
  public clasificaciones_alarmas: IClasificacionAlarma[];
  @Output () mostrar = new EventEmitter;
  @Output () tipos_alarmas = new EventEmitter;
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
    this.titleService.setTitle('Nuevo tipo de alarma');
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.listaAlarmas = this.route.snapshot.data['tipos_alarmas'];

  }
  get f(){
    return this.formCrear.controls;
  }
  nuevoTipoAlarma(): void {
    this.cargaTiposAlarmas.nuevoTipoAlarma(this.formCrear.value).subscribe(
      e => {
        this.alertExito()
        //AÑADIMOS LA NUEVA ALARMA A LA LISTA
        this.listaAlarmas.push(this.formCrear.value);
        this.tipos_alarmas.emit(this.listaAlarmas);
        this.mostrar.emit(!this.mostrar);
        this.formCrear.reset();
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
    this.mostrar.emit(!this.mostrar);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITipoAlarma} from "../../../interfaces/i-tipo-alarma";
import {IClasificacionAlarma} from "../../../interfaces/i-clasificacion-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoAlarmaService} from "../../../servicios/carga-tipo-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-modificar-tipo-alarma',
  templateUrl: './modificar-tipo-alarma.component.html',
  styleUrls: ['./modificar-tipo-alarma.component.scss']
})

export class ModificarTipoAlarmaComponent implements OnInit {
  public tipo_alarma: any;
  public formEdit: FormGroup;
  public clasificaciones_alarmas: any;
  @Input() public idTipoAlarma: number;
  @Output () mostrarModificar = new EventEmitter;
  @Input () listaTiposAlarma: ITipoAlarma[];
  @Output() tipos_alarmas = new EventEmitter;
  public listaAlarmas : ITipoAlarma[];

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buscarTipoAlarma();
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.titleService.setTitle('Modificar tipo alarma ' + this.idTipoAlarma);
    this.formEdit = this.formBuilder.group({
      nombre:[this.tipo_alarma.nombre,[Validators.required,Validators.maxLength(200)]],
      codigo:[this.tipo_alarma.codigo,[Validators.required,Validators.pattern(/[A-Z & 0-9]+$/),Validators.maxLength(200)]],
      es_dispositivo:[this.tipo_alarma.es_dispositivo,Validators.required],
      id_clasificacion_alarma:[this.tipo_alarma.id_clasificacion_alarma.id,Validators.required],
    });
  }
  get f(){
    return this.formEdit.controls;
  }
  buscarTipoAlarma(){
    let enc = false;
    let i = 0;
    while((i<this.listaTiposAlarma.length)&&(enc==false)){
      if(this.listaTiposAlarma[i].id == this.idTipoAlarma){
        enc = true;
        this.tipo_alarma = this.listaTiposAlarma[i];
      }
      i++;
    }
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('clasificacion_alarma_option')[i].setAttribute('selected', '');
  }

  modificarTipoAlarma(): void {
    console.log(this.formEdit.value);

    this.cargaTiposAlarmas.modificarTipoAlarma(this.formEdit.value,this.idTipoAlarma).subscribe(
      e => {
        this.alertExito()

      },
      error => {
        this.alertError()
      },
      ()=>{
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
        this.mostrarModificar.emit(!this.mostrarModificar);

      });
  }
  mostrarModificarTipo(){
    this.mostrarModificar.emit(!this.mostrarModificar);
  }

}

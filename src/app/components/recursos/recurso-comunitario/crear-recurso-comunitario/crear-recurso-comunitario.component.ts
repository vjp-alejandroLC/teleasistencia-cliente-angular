import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../../../interfaces/i-direccion';
import {IRecursoComunitario} from '../../../../interfaces/i-recurso-comunitario';
import {ITipoRecursoComunitario} from '../../../../interfaces/i-tipo-recurso-comunitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaDireccionService} from '../../../../servicios/carga-direccion.service';
import {CargaRecursoComunitarioService} from '../../../../services/recursos/carga-recurso-comunitario.service';
import {Direccion} from '../../../../clases/direccion';
import {RecursoComunitario} from '../../../../clases/recurso-comunitario';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CargaTipoRecursoComunitarioService} from "../../../../services/recursos/carga-tipo-recurso-comunitario.service";
import Swal from "sweetalert2";
import {environment} from "../../../../../environments/environment";


@Component({
  selector: 'app-crear-recurso-comunitario',
  templateUrl: './crear-recurso-comunitario.component.html',
  styleUrls: ['./crear-recurso-comunitario.component.scss']
})

export class CrearRecursoComunitarioComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario | any;
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];
  public tipo_recurso: ITipoRecursoComunitario | any;
  public dire: IDireccion;
  public id: number;
  public mostrar: boolean = false;
  public mostrarModificar: boolean = false;
  public formCrearTipo: FormGroup;
  nuevoRecurso: FormGroup;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService,
              private cargaRecursosComunitarios: CargaRecursoComunitarioService, private router: Router,private formBuilder: FormBuilder,
              private cargaTipoRecursosComunitarios: CargaTipoRecursoComunitarioService) {
  }

  ngOnInit(): void {
    this.recurso_comunitario = this.route.snapshot.data['recurso_comunitario'];
    this.tipo_recurso = this.route.snapshot.data['tipos_recursos_comunitarios'];

    this.route.paramMap.subscribe(params => { // Con el paramMap obtenemos todos los elementos de la URL, dentro del suscribe obtenemos el id que
      //es la variable que necesitamos
      this.id = +params.get('id');
    });

    this.cargaTipoRecursosComunitarios.getTipoRecursoComunitarioClasificacion(this.id).subscribe(
        tipos =>{
          this.tipos_recursos_comunitarios = tipos
        },
        error => {
          console.log(error);
        }
    )

    // Creamos el formulario para crear un recurso comunitario nuevo, con sus respectivas validaciones
    this.nuevoRecurso = this.formBuilder.group({
        id: [null, Validators.required],
        nombre: ['',[
          Validators.required,
          Validators.maxLength(500)
        ]],
        telefono: ['',[
          Validators.required,
          Validators.maxLength(12),
          Validators.pattern("^[9|6|7]{1}[ ]*([0-9][ ]*){8}$")
        ]],
        tipo_recursos_comunitario: ['',[
          Validators.required
        ]],
        localidad: ['',[
          Validators.required,
          Validators.maxLength(200)
        ]],
        provincia: ['',[
          Validators.required,
          Validators.maxLength(200)
        ]],
        direccion: ['',[
          Validators.required,
          Validators.maxLength(200)
        ]],
        cd: ['',[
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5),
          Validators.pattern("[0-9]+$")
        ]]
      }
    )
    this.formCrearTipo = this.formBuilder.group(
      {
        tipo_recurso: ['',Validators.required]
      }
    )
  }
  /*
  * Con este método creamos el recurso comunitario como un objeto JSON, utilizando los valores del formulario,
  * después mandamos, el nuevo recurso lo enviamos al método nuevoRecursoComunitario y acaba redireccionandose a la página principal*/
  nuevoRecursoComunitario(): void {
    this.recurso_comunitario = {
      nombre: this.nuevoRecurso.controls['nombre'].value,
      id_direccion: {
        localidad: this.nuevoRecurso.controls['localidad'].value,
        provincia: this.nuevoRecurso.controls['provincia'].value,
        direccion: this.nuevoRecurso.controls['direccion'].value,
        codigo_postal: this.nuevoRecurso.controls['cd'].value
      },
      id_tipos_recurso_comunitario: this.nuevoRecurso.controls['tipo_recursos_comunitario'].value,
      telefono: this.nuevoRecurso.controls['telefono'].value,
    }

    this.cargaRecursosComunitarios.nuevoRecursoComunitario(this.recurso_comunitario).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/recursos_comunitarios/listar/'+this.id])
      },
      error => {
        this.alertError()
      }
    );
  }
//Funcion para deshabilitar botones (EDITAR Y BORRAR TIPO ALARMA)
  botonDes(){
    if((this.nuevoRecurso.value.tipo_recursos_comunitario == '')||(this.nuevoRecurso.value.tipo_recursos_comunitario == null)){
      return true;
    }else{
      return false;
    }
  }
  //Emitimos si es true o false para mostrar el crear recurso comunitario
  mostratCrearTipo(){
    this.mostrar = !this.mostrar;
  }

  get valorForm(){
    return this.nuevoRecurso.controls;
  }

  //Emitimos si es true o false para mostrar el modificar recurso comunitario
  mostrarEditarTipo(){
    this.mostrarModificar = !this.mostrarModificar;
  }

  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de recurso?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarTipoRecurso()
      }
    })
  }

  // Esta funcion es utilizada para volver a cargar los tipos de recursos (sin recargar la página)
  actualizarTipoRecurso(id: number = null){

    this.mostrar = false;
    this.mostrarModificar = false;

    //peticion para refrescar los tipos de recursos
    this.cargaTipoRecursosComunitarios.getTipoRecursoComunitarioClasificacion(this.id).subscribe(
      lista => {
        this.tipos_recursos_comunitarios = lista;
        if(id !== null){
          this.nuevoRecurso.patchValue({tipo_recursos_comunitario:id})
        }
      },
      error => {}
      );
  }

  // Al llamar a este método se eliminará el tipo recurso comunitario, poasando por parámetros el valor que haya en el tipo recurso comunitario
  eliminarTipoRecurso(){
    console.log(this.nuevoRecurso.controls['tipo_recursos_comunitario'].value)
    this.cargaTipoRecursosComunitarios.eliminarTipoRecursoComunitario(this.nuevoRecurso.controls['tipo_recursos_comunitario'].value).subscribe(
      e=>{
        //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
        this.alertExitoBorrar()
      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertErrorBorrar()
      },
      ()=>{
        this.actualizarTipoRecurso(this.nuevoRecurso.controls['tipo_recursos_comunitario'].value);
      }
    )
  }


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
  }
}


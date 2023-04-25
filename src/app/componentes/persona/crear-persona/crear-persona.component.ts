import {Component, OnInit} from '@angular/core';
import {IPersona} from '../../../interfaces/i-persona';
import {IDireccion} from '../../../interfaces/i-direccion';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaPersonaService} from '../../../servicios/carga-persona.service';
import {Persona} from '../../../clases/persona';
import Swal from "sweetalert2";
import {Direccion} from "../../../clases/direccion";
import {CargaDireccionService} from "../../../servicios/carga-direccion.service";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TipoModalidadPaciente} from "../../../clases/tipo-modalidad-paciente";


@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})

export class CrearPersonaComponent implements OnInit {

  /**
   * Atributos
   */
  public persona: IPersona;
  public dire: IDireccion;
  public formulario: FormGroup;
  public tipos_personas: TipoModalidadPaciente[];
  public id: number;
  public mostrar: boolean = false;
  public mostrarModificar: boolean = false;


  /**
   * Constantes
   */
  readonly REGEX_NAME = /^[A-Z][a-zA-ZÀ-ÿ- ]+$/;
  readonly REGEX_DNI = /^([0-9]{8})([A-Z])$/;
  readonly REGEX_MOVIL = /^[6|7]{1}[ ]*([0-9][ ]*){8}$/;
  readonly REGEX_FIJO = /^[9]{1}[ ]*([0-9][ ]*){8}$/;
  readonly REGEX_CP = /[0-9]+$/;
  readonly PLANTILLA_OBS = '- Otros Servicios: \n' +
    '- Datos de ocio: \n' +
    '- Servicio de Comidas:';


  /**
   * Constructor
   * @param titleService
   * @param route
   * @param cargaPersonas
   * @param router
   * @param cargaDirecciones
   * @param formBuilder
   */
  constructor(private titleService: Title, private route: ActivatedRoute, private cargaPersonas: CargaPersonaService, private router: Router, private cargaDirecciones: CargaDireccionService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.tipos_personas = this.route.snapshot.data['tipos_personas'];
    this.buildForm();  //Formularios reactivos
    this.titleService.setTitle('Crear nueva persona');
  }


  /**
   *   formularios reactivos
   */
  private buildForm() {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required,
        Validators.maxLength(200),
        Validators.minLength(2),
        Validators.pattern(this.REGEX_NAME)],
      ],
      apellidos: ['', [Validators.required,
        Validators.maxLength(200),
        Validators.minLength(2),
        Validators.pattern(this.REGEX_NAME)],
      ],
      dni: ['', [Validators.required,
        Validators.maxLength(9),
        Validators.pattern(this.REGEX_DNI)],
      ],
      fecha_nacimiento: ['', [
        Validators.required,
      ]],
      sexo: ['Hombre', [Validators.required]],
      telefono_fijo: ['', [Validators.maxLength(12),
        Validators.pattern(this.REGEX_FIJO)]],
      telefono_movil: ['', [Validators.maxLength(12),
        Validators.pattern(this.REGEX_MOVIL)]],
      localidad: ['', [Validators.required,
        Validators.maxLength(200)]],
      provincia: ['', [Validators.required,
        Validators.maxLength(200)]],
      direccion: ['', [Validators.required,
        Validators.maxLength(200),]],
      codigo_postal: ['', [Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        Validators.pattern(this.REGEX_CP)]],
      tipos_personas: ['', [Validators.required]],
      text_area: [this.PLANTILLA_OBS, [Validators.max(250)]]
    });
  }

  /**
   *  Getters del Formulario reactivo para los banners de error.
   */

 get controles(){
   return this.formulario.controls;
  }



  comprobarFormulario() {
    console.log(this.formulario.value);

    this.nuevaPersona();
  }

  nuevaPersona(): void {
    let persona;

    persona = {
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellidos,
      dni: this.formulario.value.dni,
      fecha_nacimiento: this.formulario.value.fecha_nacimiento,
      sexo: this.formulario.value.sexo,
      telefono_fijo: this.formulario.value.telefono_fijo,
      telefono_movil: this.formulario.value.telefono_movil,
      tipo_modalidad_paciente: this.formulario.value.tipos_personas,
      SAD: this.formulario.value.text_area,
      id_direccion: {
        localidad: this.formulario.value.localidad,
        provincia: this.formulario.value.provincia,
        direccion: this.formulario.value.direccion,
        codigo_postal: this.formulario.value.codigo_postal
      }
    }
    console.log(persona)


    this.cargaPersonas.nuevaPersona(persona).subscribe(
      e => {
        console.log("id" + e.id);
        this.id = e.id;
        this.nuevaDireccion();
        this.alertExito()
      },
      error => {
        this.alertError()
      }
    );
  }


  nuevaDireccion(): void {
    let id_direccion;

    id_direccion = {
      localidad: this.formulario.value.localidad,
      provincia: this.formulario.value.provincia,
      direccion: this.formulario.value.direccion,
      codigo_postal: this.formulario.value.codigo_postal
    }


    this.cargaDirecciones.nuevaDireccion(id_direccion).subscribe(
      e => {
      },
      error => {
        console.log(error);
      }
    );
  }

  mostratCrearTipo() {
    this.mostrar = !this.mostrar;
  }

  desactivado() {
    return (this.formulario.value.tipos_personas == '') || (this.formulario.value.tipos_personas == null);
  }


  /**
   * Alertas
   */
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
}



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
  //public direcciones: IDireccion[];
  public dire: IDireccion;
  public formulario: FormGroup;


  /**
   * Constantes
   */
  readonly REGEX_NAME = /^[A-Z][a-zA-ZÀ-ÿ- ]+$/;
  readonly REGEX_DNI = /^([0-9]{8})([A-Z])$/;
  readonly REGEX_MOVIL = /^[6|7]{1}[ ]*([0-9][ ]*){8}$/;
  readonly REGEX_FIJO = /^[9]{1}[ ]*([0-9][ ]*){8}$/;
  readonly REGEX_CP = /[0-9]+$/;
  readonly REGEX_TEXT = /^[^\s]+(\s.*)?$/;

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
    this.buildForm();  //Formularios reactivos
    this.titleService.setTitle('Crear nueva persona');
    this.persona = new Persona();
    this.persona.sexo = 'Hombre';
    this.persona.telefono_fijo = '';
    this.persona.telefono_movil = '';
    this.dire = new Direccion();
  }

  /**
   *  Getters del Formulario reactivo para los banners de error.
   */
  get dni() {
    return this.formulario.get('dni');
  }

  get nombre() {
    return this.formulario.get('nombre');
  }

  get apellidos() {
    return this.formulario.get('apellidos');
  }

  get date() {
    return this.formulario.get('fecha_nacimiento');
  }

  get telefono_fijo() {
    return this.formulario.get('telefono_fijo')
  }

  get telefono_movil() {
    return this.formulario.get('telefono_movil')
  }

  get localidad() {
    return this.formulario.get('localidad')
  }

  get provincia() {
    return this.formulario.get('provincia')
  }

  get direccion() {
    return this.formulario.get('direccion')
  }

  get text() {
    return this.formulario.get('text_area')
  }

  get cp() {
    return this.formulario.get('codigo_postal')
  }



  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/personas']);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevaPersona(): void {





  //   this.cargaPersonas.nuevaPersona(this.persona).subscribe(
  //     e => {
  //       this.nuevaDireccion();
  //       this.alertExito()
  //     },
  //     error => {
  //       this.alertError()
  //     }
  //   );


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
      fecha_nacimiento: ['', [Validators.required]],
      sexo: ['Hombre', [Validators.required]],
      telefono_fijo: ['', [Validators.maxLength(12),
        Validators.pattern(this.REGEX_FIJO)]],
      localidad: ['', [Validators.required,
        Validators.maxLength(200)]],
      telefono_movil: ['', [Validators.maxLength(12),
        Validators.pattern(this.REGEX_MOVIL)]],
      provincia: ['', [Validators.required,
        Validators.maxLength(200)]],
      direccion: ['', [Validators.required,
        Validators.maxLength(200),]],
      codigo_postal: ['', [Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        Validators.pattern(this.REGEX_CP)]],
      tipo_user: ['Persona mayor', [Validators.required]],
      text_area: ['', [Validators.pattern(this.REGEX_TEXT)]]
    });
  }


  comprobarFormulario() {
    this.nuevaPersona()
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


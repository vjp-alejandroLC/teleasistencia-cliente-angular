import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaPersonaService} from '../../../servicios/carga-persona.service';
import Swal from "sweetalert2";
import {CargaDireccionService} from "../../../servicios/carga-direccion.service";
import {environment} from "../../../../environments/environment";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TipoModalidadPaciente} from "../../../clases/tipo-modalidad-paciente";
import {CargaTerminalesService} from "../../../servicios/terminal/carga-terminales.service";
import {CargaPacienteService} from "../../../servicios/carga-paciente.service";
import {IPersona} from "../../../interfaces/i-persona";
import {ITerminal} from "../../../interfaces/i-terminal";
import {IPaciente} from "../../../interfaces/i-paciente";
import {CargaTipoModalidadPacienteService} from "../../../servicios/carga-tipo-modalidad-paciente.service";


@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})

export class CrearPersonaComponent implements OnInit {

  /*  Atributos  */
  public dire: IDireccion | any;
  public formulario: FormGroup;
  public tipos_personas: TipoModalidadPaciente[];
  public mostrar: boolean = false;
  public mostrarModificar: boolean = false;
  public persona: IPersona | any;
  public terminal: ITerminal | any;
  public paciente: IPaciente | any;
  public idPaciente: number;


  /* Constantes */
  readonly REGEX_NAME = /^[A-Z][a-zA-ZÀ-ÿ- ]+$/;
  readonly REGEX_DNI = /^([0-9]{8})([A-Z])$/;
  readonly REGEX_MOVIL = /^[6|7]{1}[ ]*([0-9][ ]*){8}$/;
  readonly REGEX_FIJO = /^[9]{1}[ ]*([0-9][ ]*){8}$/;
  readonly REGEX_CP = /[0-9]+$/;
  readonly REGEX_EXP = /^\d{4}$/;
  readonly PLANTILLA_OBS = '- Otros Servicios: \n' +
    '- Datos de ocio: \n' +
    '- Servicio de Comidas:';


  /**
   * Constructor
   * @param route
   * @param cargaPersonas
   * @param router
   * @param cargaDirecciones
   * @param formBuilder
   * @param crearTerminal
   * @param crearPaciente
   * @param modalidades
   */
  constructor(private route: ActivatedRoute,
              private cargaPersonas: CargaPersonaService,
              private router: Router,
              private cargaDirecciones: CargaDireccionService,
              private formBuilder: FormBuilder,
              private crearTerminal: CargaTerminalesService,
              private crearPaciente: CargaPacienteService,
              private modalidades: CargaTipoModalidadPacienteService) {
  }

  ngOnInit(): void {
    this.tipos_personas = this.route.snapshot.data['tipos_personas'];
    this.buildForm();  //Formularios reactivos
  }


  /* formulario reactivo */
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
      expediente: ['', [Validators.required,
        Validators.pattern(this.REGEX_EXP)]],
      dni: ['', [Validators.required,
        Validators.maxLength(9),
        Validators.pattern(this.REGEX_DNI)],
      ],
      fecha_nacimiento: ['', [
        Validators.required,
        validacionFechaMaxima()
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

  /* Getters del Formulario reactivo para los banners de error */
  get controles() {
    return this.formulario.controls;
  }

  /* Método para crear personas.*/
  private crearPersona() {

    this.persona = {
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellidos,
      dni: this.formulario.value.dni,
      fecha_nacimiento: this.formulario.value.fecha_nacimiento,
      sexo: this.formulario.value.sexo,
      telefono_fijo: this.formulario.value.telefono_fijo,
      telefono_movil: this.formulario.value.telefono_movil,
      id_direccion: {
        localidad: this.formulario.value.localidad,
        provincia: this.formulario.value.provincia,
        direccion: this.formulario.value.direccion,
        codigo_postal: this.formulario.value.codigo_postal
      }
    }

    this.cargaPersonas.nuevaPersona(this.persona).subscribe(
      e => {
        this.persona = e;
        this.nuevoTerminal()
        this.alertExito()
      },
      error => {
        this.alertError()
      }
    );
  }

  /* Método para crear Terminales */
  private nuevoTerminal() {
    this.terminal = {
      numero_terminal: "",
      id_titular: null,
      id_tipo_vivienda: null,
      modo_acceso_vivienda: "",
      barreras_arquitectonicas: ""
    }

    this.crearTerminal.nuevoTerminal(this.terminal).subscribe(
      e => {
        this.terminal = e;
        this.crearTerminal.idTerminal = e.id;

        this.nuevoPaciente();
      },
      error => {
        console.log(error);
      }
    );
  }


  /* Método para crear un paciente nuevo asociado a una terminal */
  nuevoPaciente() {
    this.paciente = {
      id_terminal: this.terminal.id,
      id_persona: this.persona.id,
      tiene_ucr: false,
      numero_expediente: this.formulario.value.expediente,
      numero_seguridad_social: "",
      prestacion_otros_servicios_sociales: "",
      observaciones_medicas: this.formulario.value.text_area,
      intereses_y_actividades: "",
      id_tipo_modalidad_paciente: this.formulario.value.tipos_personas
    }

    this.crearPaciente.nuevoPaciente(this.paciente).subscribe(
      e => {
        this.paciente = e;
        this.terminal.id_titular = this.paciente.id; // Asocio el id del usuari al terminal creado en el paso anterior.
        this.alertExito();
        console.log('id del paciente recien creado' + e.id)
        this.crearPaciente.idPaciente = e.id;

        console.log(this.crearPaciente.idPaciente);
      },
      error => {
        console.log(error);
      },
    );
  }


  /* Función que crea todas las entidades (Persona , Paciente, Terminal, Direccion) */
  nuevoUsuarioServicio(): void {
    this.crearPersona();
  }


  mostratCrearTipo() {
    this.mostrar = !this.mostrar;
  }

  desactivado() {
    return (this.formulario.value.tipos_personas == '') || (this.formulario.value.tipos_personas == null);
  }


  /* Alertas */

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

  private eliminarTipoModalidad() {
    console.log(this.formulario.value.tipos_personas)
    this.modalidades.eliminarTipoModalidadPaciente(this.formulario.value.tipos_personas).subscribe(
      e => {
        //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
        this.alertExitoBorrar()
      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertErrorBorrar()
      },
      () => {
        this.actualizarModalidades();
      }
    )
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


  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de modalidad?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoModalidad()
      }
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

  mostrarEditarTipo() {
    this.mostrarModificar = !this.mostrarModificar;
  }

  //FUNCION PARA REFRESACAR LOS TIPOS ADE ALARMA A TIEMPO REAL (SIN RECARGAR LA PAGINA)
  actualizarModalidades(id_tipo_modalidad = null) {
    this.modalidades.getTiposModalidadesPacientes().subscribe(
      lista => {
        this.tipos_personas = lista;
        this.formulario.patchValue({tipos_personas: id_tipo_modalidad})
      },
      error => {
      },
    );
  }

  getToday() {
    return new Date().toISOString().split("T")[0];
  }
}


/**
 * Validaciones Especiales
 */

export function validacionFechaMaxima(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (new Date(control.value) > new Date()) {
      return {fechaExcedida: true};
    }
    return null;
  }
}

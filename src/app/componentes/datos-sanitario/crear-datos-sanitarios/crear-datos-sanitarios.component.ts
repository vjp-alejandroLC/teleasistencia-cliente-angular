import { Component, OnInit } from '@angular/core';
import {IRecursoComunitario} from "../../../interfaces/i-recurso-comunitario";
import {ITipoRecursoComunitario} from "../../../interfaces/i-tipo-recurso-comunitario";
import {IDireccion} from "../../../interfaces/i-direccion";
import {IRelacionTerminalRecursoComunitarios} from "../../../interfaces/i-relacion-terminal-recurso-comunitarios";
import {Terminal} from "../../../clases/terminal";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "../../../servicios/relacion-terminal-recurso-comunitario/carga-relacion-terminal-recursos-comunitarios.service";
import {ITerminal} from "../../../interfaces/i-terminal";
import {CargaTerminalesService} from "../../../servicios/terminal/carga-terminales.service";
import {CargaTipoRecursoComunitarioService} from "../../../servicios/carga-tipo-recurso-comunitario.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecursoComunitario} from "../../../clases/recurso-comunitario";
import {Direccion} from "../../../clases/direccion";
import {RelacionTerminalRecursoComunitarios} from "../../../clases/relacion-terminal-recurso-comunitarios";
import {CargaDireccionService} from "../../../servicios/carga-direccion.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {CargaRecursoComunitarioService} from "../../../servicios/carga-recurso-comunitario.service";

@Component({
  selector: 'app-crear-datos-sanitarios',
  templateUrl: './crear-datos-sanitarios.component.html',
  styleUrls: ['./crear-datos-sanitarios.component.scss']
})
export class CrearDatosSanitariosComponent implements OnInit {
  submitted = false;
  mostrar = false;
  public recurso_comunitario: IRecursoComunitario |any;
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[] | any;
  public relaciones_terminales: ITerminal[] | any;
  public relacion_terminal_recurso : IRelacionTerminalRecursoComunitarios | any;
  public dire: IDireccion | any;
  public formulario: FormGroup | any;
  public cantidadRecursos: IRecursoComunitario[] = [] ;
  public recursoBorrad: IRecursoComunitario | any;
  public recursosMostrados: IRecursoComunitario[];

  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, private cargaRelacionTerminalRecursosComunitarios: CargaRelacionTerminalRecursosComunitariosService, private cargaRelacionTerminal: CargaTerminalesService, private cargaTiposRecursos: CargaTipoRecursoComunitarioService, private formBuilder: FormBuilder, private cargaDireccion: CargaDireccionService, private cargaRecurso: CargaRecursoComunitarioService) { }

  ngOnInit(): void {
    this.dire = new Direccion();
    this.recurso_comunitario = new RecursoComunitario();
    this.relacion_terminal_recurso = new RelacionTerminalRecursoComunitarios();
    this.cargaRelacionTerminal.getTerminales().subscribe(
      terminal => {
        this.relaciones_terminales = terminal;
      },
      error => console.log(error),
    );
    this.cargaTiposRecursos.getTiposRecursosComunitarios().subscribe(
      recursos => {
        this.tipos_recursos_comunitarios = recursos;
      },
      error => console.log(error),
    )

    this.cargaRecurso.getRecursosComunitarios().subscribe(
      recursos =>{
        this.recursosMostrados = recursos;
      },
      error => console.log(error),
    )

    this.crearFormulario();
  }

  crearFormulario(){
      this.formulario = this.formBuilder.group(
        {
          recurso: ['',[Validators.required]],
          tipoRecurso: ['',[Validators.required]],
          relacion_terminal: ['',[Validators.required]],
          tiempo: ['', [Validators.required]]

        }
      )
  }

  agregarArray(){
    this.cargaRecurso.getRecursoComunitario(this.formulario.get('recurso').value).subscribe(
        recurso =>{
          this.cantidadRecursos.push(recurso);

        }
    )
  }



  crearRelacion(){
    console.log(this.cantidadRecursos);
    for (let recurso of this.cantidadRecursos){
      this.relacion_terminal_recurso = {
        'id_terminal': this.formulario.get('relacion_terminal').value,
        'id_recurso_comunitario': recurso.id,
        'tiempo_estimado': this.formulario.get('tiempo').value
      }
      this.cargaRelacionTerminalRecursosComunitarios.nuevaRelacionRecurso(this.relacion_terminal_recurso).subscribe(
        () =>{
        }

      )
    }
  }

  borrarRecurso(id: number, i: number) {
    this.cargaRecurso.getRecursoComunitario(id).subscribe(
      recurso => {
        this.recursoBorrad = recurso
      },
      error => console.log(error),
      () =>{
        this.cantidadRecursos.splice(i,1);
        this.cargaRecurso.eliminarRecursoComunitario(this.recursoBorrad).subscribe(
          () =>{
            this.alertExito();
          }
        )

      }
    )

  }

verRecursos(){
    this.mostrar = !this.mostrar;
}

  onSubmit(){
    this.submitted = true;

    if (this.formulario.invalid){
      return;
    }
    this.agregarArray();
  }

  get nombre(){
    return this.formulario.get('nombre') as FormControl;
  }

  get telefono(){
    return this.formulario.get('telefono') as FormControl;

  }

  get localidad(){
    return this.formulario.get('localidad') as FormControl;
  }

  get provincia(){
    return this.formulario.get('provincia') as FormControl;
  }


  get direccion(){
    return this.formulario.get('direccion') as FormControl;
  }

  get codigo_postal(){
    return this.formulario.get('codigo_postal') as FormControl;
  }

  get tiempo(){
    return this.formulario.get('tiempo') as FormControl;
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
}


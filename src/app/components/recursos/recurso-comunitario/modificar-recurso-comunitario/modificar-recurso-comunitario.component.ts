import {Component, OnInit} from '@angular/core';
import {IRecursoComunitario} from '../../../../interfaces/i-recurso-comunitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaDireccionService} from '../../../../servicios/carga-direccion.service';
import {CargaRecursoComunitarioService} from '../../../../services/recursos/carga-recurso-comunitario.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CargaTipoRecursoComunitarioService} from "../../../../services/recursos/carga-tipo-recurso-comunitario.service";
import {IDireccion} from "../../../../interfaces/i-direccion";
import {ITipoRecursoComunitario} from "../../../../interfaces/i-tipo-recurso-comunitario";

@Component({
  selector: 'app-modificar-recurso-comunitario',
  templateUrl: './modificar-recurso-comunitario.component.html',
  styleUrls: ['./modificar-recurso-comunitario.component.scss']
})

export class ModificarRecursoComunitarioComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario | any;
  public idRecursoComunitario: number;

  // Variables en las que almacenaremos la información obtenida del formulario
  public tipo_recurso: ITipoRecursoComunitario | any;
  public dire: IDireccion | any;

  // Variables utilizadas para mostrar en los values, utlizando un resolve
  public tipos_recursos_comunitarios: any;
  public direccion: any;

  editarRecurso: FormGroup | any;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaDirecciones: CargaDireccionService, private cargaRecursosComunitarios: CargaRecursoComunitarioService, private cargaTipoRecurso: CargaTipoRecursoComunitarioService, private router: Router,private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    // Mediante un resolve obtenemos los valores para el recurso comunitario, tipo de recurso, direccion
    this.recurso_comunitario = this.route.snapshot.data['recurso_comunitario'];
    this.tipo_recurso = this.route.snapshot.data['tipos_recursos_comunitarios'];
    this.direccion = this.recurso_comunitario.id_direccion;
    this.idRecursoComunitario = this.recurso_comunitario.id;

    /* Creamos los valores del formulario
     * Con la palabra reservada Validators creamos la validación de los valores
     * */
    this.editarRecurso = this.formBuilder.group({
      nombre: [this.recurso_comunitario.nombre,[
        Validators.required,
        Validators.maxLength(500)
      ]],
      telefono: [this.recurso_comunitario.telefono,[
        Validators.required,
        Validators.maxLength(12),
        Validators.pattern("^[9|6|7]{1}[ ]*([0-9][ ]*){8}$")
      ]],
      clasificacion_recursos_comunitario: [this.recurso_comunitario.id_tipos_recurso_comunitario.id,[
        Validators.required
      ]],
      localidad: [this.recurso_comunitario.id_direccion.localidad, [
        Validators.required,
        Validators.maxLength(200)
      ]],
      provincia: [this.recurso_comunitario.id_direccion.provincia, [
        Validators.required,
        Validators.maxLength(200)
      ]],
      direccion: [this.recurso_comunitario.id_direccion.direccion, [
        Validators.required,
        Validators.maxLength(200)
      ]],
      cd: [this.recurso_comunitario.id_direccion.codigo_postal, [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        Validators.pattern("[0-9]+$")
      ]]
      }
    )
  }

  modificarRecursoComunitario(): void {

    this.dire = {
      id: this.recurso_comunitario.id_direccion.id,
      localidad: this.editarRecurso.controls['localidad'].value,
      provincia: this.editarRecurso.controls['provincia'].value,
      direccion: this.editarRecurso.controls['direccion'].value,
      codigo_postal: this.editarRecurso.controls['cd'].value
    }

    this.recurso_comunitario = {
      nombre: this.editarRecurso.controls['nombre'].value,
      telefono: this.editarRecurso.controls['telefono'].value,
      id_tipos_recurso_comunitario: this.editarRecurso.controls['clasificacion_recursos_comunitario'].value,
      id_direccion: this.dire
    }

    this.cargaRecursosComunitarios.modificarRecursoComunitario(this.recurso_comunitario, this.idRecursoComunitario).subscribe(
      error => {
        console.log(error)
      }
    );
  }
  onSubmit(){

    this.modificarRecursoComunitario();
  }

}

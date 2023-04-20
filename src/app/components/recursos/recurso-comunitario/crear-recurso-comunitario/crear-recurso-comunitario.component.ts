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


@Component({
  selector: 'app-crear-recurso-comunitario',
  templateUrl: './crear-recurso-comunitario.component.html',
  styleUrls: ['./crear-recurso-comunitario.component.scss']
})

export class CrearRecursoComunitarioComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario | any;
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];
  public dire: IDireccion;
  nuevoRecurso: FormGroup;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private cargaRecursosComunitarios: CargaRecursoComunitarioService, private router: Router,private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.recurso_comunitario = this.route.snapshot.data['recurso_comunitario'];
    this.tipos_recursos_comunitarios = this.route.snapshot.data['tipos_recursos_comunitarios'];
/*
    this.dire = new Direccion();
*/

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
        clasificacion_recursos_comunitario: ['',[
          Validators.required
        ]],
/*
        id_direccion: [null, Validators.required],
        this.recurso_comunitario.id_tipos_recurso_comunitario.id
*/
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
  }

  nuevoRecursoComunitario(): void {
    /*this.dire = {
      id: this.nuevoRecurso.controls['id_direccion'].value,
      localidad: this.nuevoRecurso.controls['localidad'].value,
      provincia: this.nuevoRecurso.controls['provincia'].value,
      direccion: this.nuevoRecurso.controls['direccion'].value,
      codigo_postal: this.nuevoRecurso.controls['cd'].value
    }

    console.log(this.nuevoRecurso.controls['nombre'].value)
    console.log(this.nuevoRecurso.controls['telefono'].value)
    console.log(this.nuevoRecurso.controls['clasificacion_recursos_comunitario'].value)
    console.log(this.nuevoRecurso.controls['localidad'].value)
    console.log(this.nuevoRecurso.controls['provincia'].value)
    console.log(this.nuevoRecurso.controls['direccion'].value)
    console.log(this.nuevoRecurso.controls['cd'].value)
    */
    this.recurso_comunitario = {
      nombre: this.nuevoRecurso.controls['nombre'].value,
      id_direccion: {
        localidad: this.nuevoRecurso.controls['localidad'].value,
        provincia: this.nuevoRecurso.controls['provincia'].value,
        direccion: this.nuevoRecurso.controls['direccion'].value,
        codigo_postal: this.nuevoRecurso.controls['cd'].value
      },
      id_tipos_recurso_comunitario: this.nuevoRecurso.controls['clasificacion_recursos_comunitario'].value,
      telefono: this.nuevoRecurso.controls['telefono'].value,
    }

    this.cargaRecursosComunitarios.nuevoRecursoComunitario(this.recurso_comunitario).subscribe(
      error => {
        console.log(error)
      }
    );
  }

}

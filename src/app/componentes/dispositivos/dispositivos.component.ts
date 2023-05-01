import {Component, OnInit} from '@angular/core';
import {TipoSituacion} from "../../clases/tipo-situacion";
import {CargaTipoSituacionService} from "../../servicios/carga-tipo-situacion.service";
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  /*  Atributos  */
  public listaDeSituaciones: ITipoSituacion[];
  public formulario: FormGroup;


  constructor(private situaciones: CargaTipoSituacionService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.listaDeSituaciones = this.route.snapshot.data['tipos_situaciones'];
    this.buildForm();  //Formularios reactivos
  }

  /* formulario reactivo */
  private buildForm() {
    this.formulario = this.formBuilder.group({
      fecha_alta: ['', [Validators.required,
      validacionFechaMaxima()]],
      situaciones:['', [Validators.required]],
      numero_terminal:['', [Validators.required]],
      modelo_terminal:['',[Validators.required]]

    });
  }


  getToday() {
    return new Date().toISOString().split("T")[0];
  }

  get controles() {
    return this.formulario.controls;
  }
}

export function validacionFechaMaxima(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (new Date(control.value) > new Date()) {
      return {fechaExcedida: true};
    }
    return null;
  }
}

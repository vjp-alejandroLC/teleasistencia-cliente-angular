import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CargaTipoAlarmaService} from "../../servicios/carga-tipo-alarma.service";
import {ITipoAlarma} from "../../interfaces/i-tipo-alarma";

@Component({
  selector: 'app-mostrar-clasificacion-alarma',
  templateUrl: './mostrar-clasificacion-alarma.component.html',
  styleUrls: ['./mostrar-clasificacion-alarma.component.scss']
})
export class MostrarClasificacionAlarmaComponent implements OnInit {

  @Input() tipoPeticion: any;
  public tipoFormulario: ITipoAlarma[];
  public formulario: FormGroup;
  @Output() resultadoEleccion: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private clasificacion: CargaTipoAlarmaService,
  ) {
  }

  ngOnInit(): void {
    this.getDatos()
    this.buildForm();  //Formularios reactivos
  }

  private buildForm() {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]]
    });
  }

  subirDatos() {
    if (this.formulario.value.nombre != null) {
      let datos;
      datos = {
        nombre: this.formulario.value.nombre,
        codigo: this.tipoPeticion.codigo
      }

      this.resultadoEleccion.emit(datos);
    }
  }

  getDatos() {
    this.clasificacion.getTipoAlarmaPorClasificacion(this.tipoPeticion.id).subscribe(
      peticion => {
        this.tipoFormulario = peticion;

      },
      error => {
        console.log(error)
      }
    )
  }


}

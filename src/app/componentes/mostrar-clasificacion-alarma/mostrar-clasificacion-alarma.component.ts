import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CargaPacienteService} from "../../servicios/carga-paciente.service";
import {CargaTerminalesService} from "../../servicios/terminal/carga-terminales.service";
import {CargaClasificacionAlarmaService} from "../../servicios/carga-clasificacion-alarma.service";
import {CargaTipoAlarmaService} from "../../servicios/carga-tipo-alarma.service";
import {ITipoAlarma} from "../../interfaces/i-tipo-alarma";
import {validacionFechaMaxima} from "../dispositivos/dispositivos.component";

@Component({
  selector: 'app-mostrar-clasificacion-alarma',
  templateUrl: './mostrar-clasificacion-alarma.component.html',
  styleUrls: ['./mostrar-clasificacion-alarma.component.scss']
})
export class MostrarClasificacionAlarmaComponent implements OnInit {

  @Input() tipoPeticion: any;
  public tipoFormulario: ITipoAlarma[];
  public formulario: FormGroup;



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
      fecha_alta: ['', [Validators.required,
        validacionFechaMaxima()]],
      situacion: ['', [Validators.required]],
      numero_terminal: ['', [Validators.required]],
      modelo_terminal: ['', [Validators.required]],
      ucr: ['', [Validators.required]],
      periferico: ['', [Validators.required]],
      tienePerifericos: ['', [Validators.required]],
      tieneTeleasistencia: ['', [Validators.required]],

    });
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

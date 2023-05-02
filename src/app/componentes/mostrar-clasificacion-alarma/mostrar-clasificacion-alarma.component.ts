import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {CargaPacienteService} from "../../servicios/carga-paciente.service";
import {CargaTerminalesService} from "../../servicios/terminal/carga-terminales.service";

@Component({
  selector: 'app-mostrar-clasificacion-alarma',
  templateUrl: './mostrar-clasificacion-alarma.component.html',
  styleUrls: ['./mostrar-clasificacion-alarma.component.scss']
})
export class MostrarClasificacionAlarmaComponent implements OnInit {

  @Input() tipoPeticion: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

}

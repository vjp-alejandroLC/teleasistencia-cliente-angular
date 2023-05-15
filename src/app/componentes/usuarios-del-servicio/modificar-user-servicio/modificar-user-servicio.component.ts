import { Component, OnInit } from '@angular/core';
import {CargaPacienteService} from "../../../servicios/carga-paciente.service";
import { ActivatedRoute } from '@angular/router'; // Importar

@Component({
  selector: 'app-modificar-user-servicio',
  templateUrl: './modificar-user-servicio.component.html',
  styleUrls: ['./modificar-user-servicio.component.scss']
})
export class ModificarUserServicioComponent implements OnInit {


  public idPaciente: number;
  public mostrar: boolean = true;
  public mostrar2: boolean = false;
  public mostrar3: boolean = false;
  public mostrar4: boolean = false;
  public mostrar5: boolean = false;


  pruebas(evento){
    console.log(evento)
    this.mostrar=evento

  }

  constructor(private cargaPacientes: CargaPacienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargaPacientes.idPacienteEditar = Number(this.route.snapshot.paramMap.get("id"));

  }

}

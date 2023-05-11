import { Component, OnInit } from '@angular/core';
import {CargaPacienteService} from "../../../servicios/carga-paciente.service";
import { ActivatedRoute } from '@angular/router'; // Importar

@Component({
  selector: 'app-modificar-user-servicio',
  templateUrl: './modificar-user-servicio.component.html',
  styleUrls: ['./modificar-user-servicio.component.scss']
})
export class ModificarUserServicioComponent implements OnInit {


  constructor(private cargaPacientes: CargaPacienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargaPacientes.idPacienteEditar = Number(this.route.snapshot.paramMap.get("id"));

  }

}

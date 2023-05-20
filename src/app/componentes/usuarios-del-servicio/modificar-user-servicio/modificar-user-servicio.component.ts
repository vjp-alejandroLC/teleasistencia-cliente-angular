import {Component, Inject, OnInit} from '@angular/core';
import {CargaPacienteService} from "../../../servicios/carga-paciente.service";
import {ActivatedRoute} from '@angular/router'; // Importar
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-modificar-user-servicio',
  templateUrl: './modificar-user-servicio.component.html',
  styleUrls: ['./modificar-user-servicio.component.scss']
})
export class ModificarUserServicioComponent implements OnInit {

  public urlSite: string;
  public idPaciente: number;
  public mostrar: boolean = true;
  public mostrar2: boolean = false;
  public mostrar3: boolean = false;
  public mostrar4: boolean = false;
  public mostrar5: boolean = false;
  public blockModificar: boolean = false;
  public formulariosDesplegados: boolean = true;


  pruebas(evento) {
    this.mostrar = evento
  }

  toggleFormularios() {
    this.formulariosDesplegados = !this.formulariosDesplegados;
    this.mostrar = !this.mostrar;
    this.mostrar2 = !this.mostrar2;
    this.mostrar3 = !this.mostrar3;
    this.mostrar4 = !this.mostrar4;
    this.mostrar5 = !this.mostrar5;

  }

  CheckArrows() {
    if (this.blockModificar) {
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;
      this.mostrar5 = true;
    }
  }

  constructor(private cargaPacientes: CargaPacienteService, private route: ActivatedRoute, @Inject(DOCUMENT) document: any) {
  }

  ngOnInit(): void {
    this.cargaPacientes.idPacienteEditar = Number(this.route.snapshot.paramMap.get("id"));
    this.urlSite = document.URL
    this.comprobarUrl()
    this.CheckArrows()


  }


  comprobarUrl() {
    if (this.urlSite.includes("informacion")) {
      this.blockModificar = true;
    } else {
      this.blockModificar = false;
    }
  }


}

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



  pruebas(evento){
    this.mostrar=evento
  }

  constructor(private cargaPacientes: CargaPacienteService, private route: ActivatedRoute, @Inject(DOCUMENT) document: any) {
  }

  ngOnInit(): void {
    this.cargaPacientes.idPacienteEditar = Number(this.route.snapshot.paramMap.get("id"));
    console.log("url del sitio" + document.URL)
    this.urlSite = document.URL
    this.comprobarUrl()

  }


  comprobarUrl() {

    if (this.urlSite.includes("informacion")) {
      console.log("es de informacion")
      this.blockModificar = true;
    } else {
      console.log("es de editar")
      this.blockModificar = false;
    }

  }


}

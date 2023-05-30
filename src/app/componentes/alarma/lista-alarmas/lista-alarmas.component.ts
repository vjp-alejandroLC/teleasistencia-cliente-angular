import { Component, OnInit } from '@angular/core';
import { Alarma } from "../../../clases/alarma";
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {OrdenacionTablasService} from "../../../servicios/ordenacion-tablas.service";


@Component({
  selector: 'app-lista-alarmas',
  templateUrl: './lista-alarmas.component.html',
  styleUrls: ['./lista-alarmas.component.scss']
})
export class ListaAlarmasComponent implements OnInit {
  public alarmas : Alarma[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private ordTabla: OrdenacionTablasService) { }


  ngOnInit(): void {
    this.alarmas = this.route.snapshot.data['alarmas'];
    this.titleService.setTitle('Alarmas');
  }

  ordenacionTabla(indice: number, tipo: string){
    this.ordTabla.ordenacionService(indice, tipo);
  }
  seleccionarFondo(alarma: Alarma): string {
    if (alarma.estado_alarma == "Cerrada") {
      return "cerrada"
    }
    return "abierta"

  }
}

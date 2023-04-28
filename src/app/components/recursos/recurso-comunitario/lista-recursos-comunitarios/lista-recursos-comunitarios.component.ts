import {Component, OnInit} from '@angular/core';
import {IRecursoComunitario} from '../../../../interfaces/i-recurso-comunitario';
import {ActivatedRoute} from '@angular/router';
import {OrdenacionTablasService} from "../../../../servicios/ordenacion-tablas.service";

@Component({
  selector: 'app-lista-recursos-comunitarios',
  templateUrl: './lista-recursos-comunitarios.component.html',
  styleUrls: ['./lista-recursos-comunitarios.component.scss']
})
export class ListaRecursosComunitariosComponent implements OnInit {
  public recursos_comunitarios: IRecursoComunitario[] | any;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private ordTabla: OrdenacionTablasService) {
  }

  ngOnInit(): void {
    this.recursos_comunitarios = this.route.snapshot.data['recursos_comunitarios'];
  }

  ordenacionTabla(indice: number, tipo: string){
    this.ordTabla.ordenacionService(indice, tipo);
  }
}

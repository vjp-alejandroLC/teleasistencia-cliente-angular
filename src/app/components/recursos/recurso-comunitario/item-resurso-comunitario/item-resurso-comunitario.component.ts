import {Component, Input, OnInit} from '@angular/core';
import {IRecursoComunitario} from '../../../../interfaces/i-recurso-comunitario';
import {CargaTipoRecursoComunitarioService} from "../../../../services/recursos/carga-tipo-recurso-comunitario.service";
import {CargaRecursoComunitarioService} from "../../../../services/recursos/carga-recurso-comunitario.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";


@Component({
  selector: 'item-resurso-comunitario, [item-resurso-comunitario]',
  templateUrl: './item-resurso-comunitario.component.html',
  styleUrls: ['./item-resurso-comunitario.component.scss']
})

export class ItemResursoComunitarioComponent implements OnInit {
  @Input() public recurso_comunitario: IRecursoComunitario;

  constructor(private cargaRecursoComunitario: CargaRecursoComunitarioService, private router:Router) {
  }

  ngOnInit(): void {
  }

  eliminarRecurso(){
    this.cargaRecursoComunitario.eliminarRecursoComunitario(this.recurso_comunitario)
    window.location.reload()
    console.log(this.recurso_comunitario)
  }
}

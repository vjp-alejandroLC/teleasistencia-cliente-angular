import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaCopiaSeguridadService} from "../../../servicios/carga-copia-seguridad.service";
import {ICopiaSeguridad} from "../../../interfaces/i-copia-seguridad";
import {CopiaSeguridad} from "../../../clases/copia-seguridad";

@Component({
  selector: 'app-crear-copia-seguridad',
  templateUrl: './crear-copia-seguridad.component.html',
  styleUrls: ['./crear-copia-seguridad.component.scss']
})
export class CrearCopiaSeguridadComponent implements OnInit {
  public copia: ICopiaSeguridad;
  public descripcion_copia: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private cargaCopia: CargaCopiaSeguridadService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Crear nueva Copia de Seguridad');
    this.copia = new CopiaSeguridad();
    this.descripcion_copia = '';
  }

  nuevaCopia(): void{
    this.cargaCopia.nuevaCopia(this.copia).subscribe(
      e => {
        this.router.navigate(['/copia_seguridad']);
      },
      error => {
        console.log(error);
      }
    );
  }

}

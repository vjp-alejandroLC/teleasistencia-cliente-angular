import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {IAlarma} from "../../../interfaces/i-alarma";
import {ActivatedRoute} from "@angular/router";
import {ITipoRecursoComunitario} from "../../../interfaces/i-tipo-recurso-comunitario";
import {
  CargaRecursosComunitariosAlarmaService
} from "../../../servicios/recursos-comunitarios-alarma/carga-recursos-comunitarios-alarma.service";
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "../../../servicios/relacion-terminal-recurso-comunitario/carga-relacion-terminal-recursos-comunitarios.service";
import {IRelacionTerminalRecursoComunitarios} from "../../../interfaces/i-relacion-terminal-recurso-comunitarios";
import {IClasificacioRecurso} from "../../../interfaces/i-clasificacio-recurso";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recursos-comunitarios',
  templateUrl: './recursos-comunitarios.component.html',
  styleUrls: ['./recursos-comunitarios.component.scss']
})
export class RecursosComunitariosComponent implements OnInit {

  public alarma: IAlarma
  public tiposRecursos: IClasificacioRecurso[]
  @Input() idTerminal: number;
  public listaTiposExistentes:  IClasificacioRecurso[]=[];
  public formulario: FormGroup;
  public id_recurso_comunitario: number;
  public listaRecursosTerminal: IRelacionTerminalRecursoComunitarios[];
  constructor(private elementRef:ElementRef,private formBuilder: FormBuilder,private route: ActivatedRoute,private cargarResursos: CargaRecursosComunitariosAlarmaService,private cargaRecursosTerminal: CargaRelacionTerminalRecursosComunitariosService) { }

  ngOnInit(): void {
    this.alarma = this.route.snapshot.data['alarma'];
    this.tiposRecursos = this.route.snapshot.data['clas_recursos']
    //Hacemos get de los recursos segun el terminal de la alarma
    this.cargaRecursosTerminal.getRelacionTerminal(this.idTerminal).subscribe(tipos=>{
        this.listaRecursosTerminal = tipos;
      },
      error => {},
      ()=>{
        console.log(this.listaRecursosTerminal)
        //Funcion para filtrar los tipos de recursos que tiene el terminal
        this.tiposContieneTerminal();
        //Funcion para crear en el formulario solo los campos que se necesiten
        //this.anadirCamposForm()

      })
    console.log("Terminal "+this.idTerminal)
  }
      tiposContieneTerminal(){
          for (let i = 0; i<this.listaRecursosTerminal.length;i++) {
          for (let j = 0; j < this.tiposRecursos.length; j++) {
          if (this.listaRecursosTerminal[i].id_recurso_comunitario.id_tipos_recurso_comunitario.id_clasificacion_recurso_comunitario.id == this.tiposRecursos[j].id) {
          this.listaTiposExistentes.push(this.listaRecursosTerminal[i].id_recurso_comunitario.id_tipos_recurso_comunitario.id_clasificacion_recurso_comunitario);

        }
        }
        }
      this.eliminarDuplicados()
    }

    eliminarDuplicados(){
      var hash = {};
      this.listaTiposExistentes = this.listaTiposExistentes.filter(function(current) {
        var exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
      });
    }

}

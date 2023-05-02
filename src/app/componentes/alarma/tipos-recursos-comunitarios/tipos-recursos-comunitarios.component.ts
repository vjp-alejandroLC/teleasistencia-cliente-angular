import {Component, Input, OnInit} from '@angular/core';
import {IClasificacioRecurso} from "../../../interfaces/i-clasificacio-recurso";
import {ITipoRecursoComunitario} from "../../../interfaces/i-tipo-recurso-comunitario";
import {
  CargaRecursosComunitariosAlarmaService
} from "../../../servicios/recursos-comunitarios-alarma/carga-recursos-comunitarios-alarma.service";
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "../../../servicios/relacion-terminal-recurso-comunitario/carga-relacion-terminal-recursos-comunitarios.service";
import {IRelacionTerminalRecursoComunitarios} from "../../../interfaces/i-relacion-terminal-recurso-comunitarios";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tipos-recursos-comunitarios',
  templateUrl: './tipos-recursos-comunitarios.component.html',
  styleUrls: ['./tipos-recursos-comunitarios.component.scss']
})
export class TiposRecursosComunitariosComponent implements OnInit {

  constructor(private cargaRecursoAlarma: CargaRelacionTerminalRecursosComunitariosService,private formBuilder:FormBuilder) { }
  @Input() clasificacion:IClasificacioRecurso;
  public tipo_recurso:IRelacionTerminalRecursoComunitarios[];
  public tipos_recursos_anadidos:ITipoRecursoComunitario[]=[];
  @Input() terminal:number;
  public formAnadir:FormGroup;
  @Input() idAlarma:number;
  public idContainer: string;


  ngOnInit(): void {
    this.cargaRecursoAlarma.getRecursosComunitarioClasificacion(this.terminal,this.clasificacion.id).subscribe(recursos=>{
        this.tipo_recurso = recursos;
      },
      error => {},
      ()=>console.log(this.tipo_recurso)
    )
    this.formAnadir = this.formBuilder.group({
      tipo_recurso:['',Validators.required]
    })

  }
  subirPost(id:string){

    this.idContainer = this.minusculas(id);
    let post = {
      id_alarma: this.idAlarma,
      id_recurso_comunitario:this.formAnadir.value.tipo_recurso.id,
      fecha_registro:"2021-05-22",
      persona:"Emilio Pera",
      acuerdo_alcanzado:"LLamar por la tarde"
    }
    this.pintarNombre(this.formAnadir.value.tipo_recurso);
  }
  pintarNombre(tipo_recurso:IRelacionTerminalRecursoComunitarios){
    let nuevoLi = document.createElement("li");
     nuevoLi.textContent = tipo_recurso.id_recurso_comunitario.nombre;
     document.getElementById(this.idContainer).appendChild(nuevoLi);
    this.tipo_recurso = this.tipo_recurso.filter(recurso => recurso.id !== tipo_recurso.id);
    this.formAnadir.get('tipo_recurso').setValue(null);
  }
  minusculas(texto:string){
    let procesado = texto.replace(/\s+/g, '')
    return procesado.toLowerCase();
  }



}

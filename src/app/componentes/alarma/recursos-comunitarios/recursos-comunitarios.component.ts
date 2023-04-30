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
  public clas_recurso_comunitario: any;
  public id_recurso_comunitario: number;
  public recurso_comunitario_nombre: string;
  public listaRecursosTerminal: IRelacionTerminalRecursoComunitarios[];
  constructor(private elementRef:ElementRef,private formBuilder: FormBuilder,private route: ActivatedRoute,private cargarResursos: CargaRecursosComunitariosAlarmaService,private cargaRecursosTerminal: CargaRelacionTerminalRecursosComunitariosService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({})
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
        this.anadirCamposForm()

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
    //Funcion que crea campos de manera dinamica
    anadirCamposForm(){
      for (let tipos of this.listaTiposExistentes) {
        this.formulario.addControl(tipos.nombre.toLowerCase(), this.formBuilder.control(''))
      }
      console.log(this.formulario.value)
    }
    eliminarDuplicados(){
      var hash = {};
      this.listaTiposExistentes = this.listaTiposExistentes.filter(function(current) {
        var exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
      });
    }
    //Transforma los tipos de recursos en minusculas para que se puedan usar sus datos en las demas funciones
    minusculas(texto:string){
      let procesado;
      procesado = texto.replace(/\s+/g, '')
      return procesado.toLowerCase();
    }
    //Funcion para deshabilitar botones cuando los campos esten vacios
    botonDes(valor){
      if((this.formulario.get(this.minusculas(valor)).value == '')||(this.formulario.get(this.minusculas(valor)).value == null)){
        return true;
      }else{
        return false;
      }
    }
    subirPost(campo: any){
    this.clas_recurso_comunitario = campo;
    this.id_recurso_comunitario = this.formulario.get(this.minusculas(this.clas_recurso_comunitario)).value;
    let post = {
      id_alarma: this.alarma.id,
      id_recurso_comunitario:this.id_recurso_comunitario,
      fecha_registro:"2021-05-22",
      persona:"Emilio Pera",
      acuerdo_alcanzado:"LLamar por la tarde"
    }
    this.pintarNombre();
      console.log(post);
    }
    //Funcion para pintar debajo del select el servicio seleccionado
    pintarNombre(){
      this.extraerNombre();
      let nuevoLi = document.createElement("li");
      nuevoLi.textContent = this.recurso_comunitario_nombre;
      document.getElementById(this.minusculas(this.clas_recurso_comunitario)).appendChild(nuevoLi);

    }
    //Busqueda del nombre segun la id del recurso
    extraerNombre(){
    let enc = false;
    let i = 0;
      while((i<this.listaRecursosTerminal.length)&&(!enc)){
        console.log("RECURSOS TERMINAL")
        console.log(this.listaRecursosTerminal[i].id_recurso_comunitario.id)
        if(this.listaRecursosTerminal[i].id_recurso_comunitario.id == this.id_recurso_comunitario){
          this.recurso_comunitario_nombre = this.listaRecursosTerminal[i].id_recurso_comunitario.nombre;
          console.log("NOMBRE: "+this.recurso_comunitario_nombre)
          enc = true
        }
        i++;
      }
    }


}

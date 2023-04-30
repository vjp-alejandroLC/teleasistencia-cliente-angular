import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CargaAlarmaService } from "../../../servicios/alarmas/carga-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Paciente} from "../../../clases/paciente";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IAlarma} from "../../../interfaces/i-alarma";
import {
  CargaRelacionPacientePersonaService
} from "../../../servicios/relacion-paciente-persona/carga-relacion-paciente-persona.service";
import {IRelacionPacientePersona} from "../../../interfaces/i-relacion-paciente-persona";
import {
  CargaPersonaContactoAlarmaService
} from "../../../servicios/persona-contacto-alarma/carga-persona-contacto-alarma.service";


@Component({
  selector: 'app-modificar-cerrar-alarma',
  templateUrl: './modificar-cerrar-alarma.component.html',
  styleUrls: ['./modificar-cerrar-alarma.component.scss']
})
export class ModificarCerrarAlarmaComponent implements OnInit {
  public alarma: IAlarma
  public idAlarma: number
  public paciente_ucr: Paciente
  public formInf: FormGroup;
  public idTerminal: number;
  public idTerminalPersona: number;
  public formPersona: FormGroup;
  public listaPersonas: IRelacionPacientePersona[];
  public nombre_persona: string;



  constructor(private route: ActivatedRoute,private cargaPersonaAlarma: CargaPersonaContactoAlarmaService,private cargarPersona:CargaRelacionPacientePersonaService, private titleService: Title,private formBuilder: FormBuilder, private router: Router, private cargarAlarmas: CargaAlarmaService) { }

  ngOnInit(): void {
    this.formInf = this.formBuilder.group({
      observaciones:['',Validators.required],
      resumen:['',Validators.required],
    })
    this.formPersona = this.formBuilder.group({
      persona:['']
    })
    this.alarma = this.route.snapshot.data['alarma'];
    this.idAlarma = this.route.snapshot.params['id'];
    this.paciente_ucr = this.alarma.id_paciente_ucr

    if (this.alarma.id_terminal) {
      this.idTerminal = this.alarma.id_terminal.id;
      this.idTerminalPersona = this.alarma.id_terminal.id;
    }else{
      this.idTerminal = this.alarma.id_paciente_ucr.id_terminal.id;
      this.idTerminalPersona = this.alarma.id_paciente_ucr.id;
    }
    //PETICION GET PACIENTES DE CONTACTO
    this.cargarPersona.getRelacionPacientePersonaTerminal(this.idTerminalPersona).subscribe(
      lista =>{
        this.listaPersonas = lista;
      },
      error => {},
      ()=>{
        console.log("Personas contacto:")
        console.log(this.listaPersonas)
      }
    )
    console.log(this.alarma)

  }
  //buscamos la opcion que coincida con el buscado para dejarla preseleccionada
  optionSelected(i: number): void {
    document.getElementsByClassName('form-select')[i].setAttribute('selected', '');
  }
  modificarAlarma(): void {
    let datos = {
      estado_alarma:"Cerrada",
      observaciones: this.formInf.value.observaciones,
      resumen: this.formInf.value.resumen,
      id_teleoperador: localStorage.getItem("id")
    }
    this.cargarAlarmas.cerrarAlarma(datos,this.idAlarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/alarmas'])
      },
      error => {
             this.alertError()
      }
    );
  }
  //Toast para el Alert indicando que la operación fue exitosa
  alertExito() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      //El tiempo que permanece la alerta, se obtiene mediante una variable global en environment.ts
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: environment.fraseModificar,
    })
  }
  //Toast para el alert indicando que hubo algún error en la operación
  alertError() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: environment.fraseErrorModificar
    })
  }
  // funcion que obtiene el nombre del titular
  obtenerNombre() {
    //si existe paciente ucr devolvemos el nombre del titular del ucr y a que pertenece
    if (this.paciente_ucr) {
      return this.paciente_ucr.id_persona.nombre + ' ' + this.paciente_ucr.id_persona.apellidos + ' (UCR)'
    }
    // en otro caso devolvemos el nommbre del titular del terminal
    return  this.alarma.id_terminal.id_titular.id_persona.nombre + ' ' + this.alarma.id_terminal.id_titular.id_persona.apellidos + '(Terminal)'
  }
  // funcion que obtiene el telefono fijo

  obtenerTelefonoFijo() {
    //si existe paciente ucr devolvemos el telefono fijo
    if (this.paciente_ucr) {
      return this.paciente_ucr.id_persona.telefono_fijo
    }
    // en otro caso devolvemos el telefono fijo asociado al terminal
    return this.alarma.id_terminal.id_titular.id_persona.telefono_fijo
  }

  // funcion que obtiene el telefono movil
  obtenerTelefonoMovil() {
    //si existe paciente ucr devolvemos el telefono moviul
    if (this.paciente_ucr) {
      return  this.paciente_ucr.id_persona.telefono_movil
    }
    // en otro caso devolvemos el telefono movil asociado al terminal
    return this.alarma.id_terminal.id_titular.id_persona.telefono_movil
  }

  // funcion que obtiene el numero del terminal
  obtenerTerminal() {
    return this.alarma.id_terminal.numero_terminal
  }
  //NIVEL 2
  //Funcion para deshabilitar botones cuando los campos esten vacios
  botonDes(){
    if((this.formPersona.value.persona == '')||(this.formPersona.value.persona == null)){
      return true;
    }else{
      return false;
    }
  }
  subirPost(){
    let datos=
    {
      id_alarma:this.idAlarma,
      id_persona_contacto:this.formPersona.value.persona,
      fecha_registro:this.fechaActual()
    }
    this.cargaPersonaAlarma.nuevaPersonaContactoAlarma(datos).subscribe()
    this.pintarNombre();

  }
  //Funcion para pintar debajo del select el servicio seleccionado
  pintarNombre(){
    this.extraerNombre();
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = "-> "+this.nombre_persona;
    document.getElementById("personas").appendChild(nuevoLi);

  }
  //Busqueda del nombre segun la id de la persona
  extraerNombre(){
    let enc = false;
    let i = 0;
    while((i<this.listaPersonas.length)&&(!enc)){
      console.log("Personas")
      console.log(this.listaPersonas[i].id)
      if(this.listaPersonas[i].id == this.formPersona.value.persona){
        this.nombre_persona = this.listaPersonas[i].nombre;
        console.log("NOMBRE: "+this.nombre_persona)
        enc = true
      }
      i++;
    }
  }
  fechaActual(){
    let fecha = new Date();
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();

    return`${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
  }


}

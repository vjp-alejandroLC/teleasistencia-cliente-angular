import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CargaAlarmaService } from "../../../servicios/alarmas/carga-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {Paciente} from "../../../clases/paciente";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IAlarma} from "../../../interfaces/i-alarma";


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
  public idUcr: number;
  public idTerminal: number;


  constructor(private route: ActivatedRoute, private titleService: Title,private formBuilder: FormBuilder, private router: Router, private cargarAlarmas: CargaAlarmaService) { }

  ngOnInit(): void {
    this.formInf = this.formBuilder.group({
      observaciones:['',Validators.required],
      resumen:['',Validators.required],
    })
    this.alarma = this.route.snapshot.data['alarma'];
    this.idAlarma = this.route.snapshot.params['id'];
    this.paciente_ucr = this.alarma.id_paciente_ucr
    if (this.alarma.id_terminal) {
      this.idTerminal = this.alarma.id_terminal.id;
    }else{
      this.idTerminal = this.alarma.id_paciente_ucr.id_terminal.id;
    }
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

}

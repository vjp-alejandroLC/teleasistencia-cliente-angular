import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-crear-user-servicio',
  templateUrl: './crear-user-servicio.component.html',
  styleUrls: ['./crear-user-servicio.component.scss']
})
export class CrearUserServicioComponent implements OnInit {

  formVisible: boolean = true;
  animacion:boolean = false;

  constructor() {
  }

  onFormSubmit() {

    this.animacion=true;
    setTimeout(()=>{
      this.formVisible = false;
      this.animacion=false;
    },3000);
  }


  ngOnInit(): void {
  }


}

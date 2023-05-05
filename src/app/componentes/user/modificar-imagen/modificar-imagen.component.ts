import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../../interfaces/i-users";
import {IGrupo} from "../../../interfaces/i-grupo";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaUserService} from "../../../servicios/carga-user.service";
import {CargaGrupoService} from "../../../servicios/carga-grupo.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../servicios/auth.service";

@Component({
  selector: 'app-modificar-imagen',
  templateUrl: './modificar-imagen.component.html',
  styleUrls: ['./modificar-imagen.component.scss']
})
export class ModificarImagenComponent implements OnInit {
  public user: IUsers;
  public idUser: number;
  public grupos: IGrupo[];
  public img:string;
  public imgNull:string
  public formModificarU: FormGroup;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaUsers: CargaUserService, private router: Router, private cargaGrupo : CargaGrupoService, private formBuilder: FormBuilder, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
    this.idUser = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar usuario ' + this.idUser);
    this.cargaGrupo.getGroup().subscribe(
      resp=>{
        this.grupos  = resp
      }
    )
    console.log(this.user);

    this.user.groups = this.user.groups[0].id;

    const imagen=localStorage.getItem('img')
    if(imagen==='null'){
      this.imgNull=imagen
    }else{
      this.img= localStorage.getItem('img');
    }
    this.formModificarU = this.formBuilder.group({
      imagen: ['',Validators.required],
    });
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('grupo_option')[i].setAttribute('selected', '');
  }

  modificarUser(): void {
    const myFormData = new FormData();
    console.log(this.formModificarU)
    for ( let key in  this.formModificarU.controls) {
      myFormData.append(key, this.formModificarU.get(key).value);
    }
    this.cargaUsers.modificarUser(myFormData,this.idUser).subscribe(
      e => {
        this.alertExito()
        this.auth.logout();
        this.router.navigate(['/inicio']);
      },
      error => {
        this.alertError()
      }
    );
  }
  onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.formModificarU.controls.imagen.setValue(file)
    }
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
  //variable necesaria para ocultar/mostrar la contraseña
  hide = false;
}

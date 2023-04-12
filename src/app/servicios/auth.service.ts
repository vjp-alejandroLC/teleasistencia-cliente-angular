import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean = false;
  roleAs: string;


  constructor() {
  }

  login(username, userlastname, role, img) {


    /***Apartado LocalStorage***/
    localStorage.setItem('username', username);
    localStorage.setItem('userlastname', userlastname);
    localStorage.setItem('role', role);
    localStorage.setItem('img', img);

  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLogin = false;
    this.roleAs = '';

    localStorage.removeItem('token');
    localStorage.removeItem('img');
    localStorage.removeItem('username');
    localStorage.removeItem('userlastname');
    localStorage.removeItem('role');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isAdmin() {
    if (environment.admins.indexOf(localStorage.getItem('role')) != -1) {
      console.log('es admin')
      return true;
    }
    console.log('no es admin')
    return false;
  }


}




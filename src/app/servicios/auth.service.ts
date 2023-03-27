import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean = false;
  roleAs: string;
  admin: boolean = false;


  constructor() {
  }

  login(username, userlastname, role, img) {
    this.roleAs = role.toString();

    /***Apartado LocalStorage***/
    localStorage.setItem('username', username);
    localStorage.setItem('userlastname', userlastname);
    localStorage.setItem('role', this.roleAs);
    localStorage.setItem('img', img);

    if (environment.admins.indexOf(this.roleAs) != -1) {
      this.admin = true;
    }
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


}




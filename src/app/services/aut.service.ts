import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(usuario: String, senha: String): boolean {
    if (usuario === 'usuario' && senha === 'senha') {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}

import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/services/aut.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  usuario: String = '';
  senha: String = '';
  loginFalha: boolean = false;


  constructor(private autService: AutService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    if (!this.autService.login(this.usuario, this.senha)) {
      this.loginFalha = true;
    }
  }

}

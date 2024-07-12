import { Component } from "@angular/core";
import { AutService } from "src/app/services/aut.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  usuario: string = '';
  senha: string = '';
  loginFalha: boolean = false;

  constructor(private autService: AutService) { }

  login() {
    if (!this.autService.login(this.usuario, this.senha)) {
      this.loginFalha = true;
    }
  }



}

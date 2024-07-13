import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-manager';

  constructor(private router: Router) {}

  clicklogin() {
    console.log("login");
    this.router.navigate(['/login']);
  }

  clicklista() {
    console.log("lista");
    this.router.navigate(['/lista']);
  }

  clickTabela() {
    console.log("tabela");
    this.router.navigate(['/tabela']);
  }
}

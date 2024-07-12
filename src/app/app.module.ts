import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import { AutoCompliteComponentComponent } from './components/auto-complite-component/auto-complite-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

@NgModule({
  declarations: [AppComponent, ProjectListComponent, AutoCompliteComponentComponent, LoginComponentComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

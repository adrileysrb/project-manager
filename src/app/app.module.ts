import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProjectListComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ButtonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

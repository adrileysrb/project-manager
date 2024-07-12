import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [AppComponent, ProjectListComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

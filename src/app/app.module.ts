import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, ProjectListComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ButtonModule, FormsModule, TableModule,ReactiveFormsModule ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TableFilterSortEditDemo } from './table-component/table.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ProjectListComponent },
  { path: 'tabela', component: TableFilterSortEditDemo },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

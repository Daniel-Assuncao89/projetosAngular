import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditarEmprestimoComponent } from './views/editar-emprestimo/editar-emprestimo.component';
import { EditarLivrosComponent } from './views/editar-livros/editar-livros.component';
import { EmprestimoComponent } from './views/emprestimo/emprestimo.component';
import { HomeComponent } from './views/home/home.component';
import { LivrosComponent } from './views/livros/livros.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'livros',
    component: LivrosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'emprestimo',
    component: EmprestimoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'emprestimo/:id',
    component: EditarEmprestimoComponent
  },
  {
    path: 'livros/:id',
    component: EditarLivrosComponent
  },
  {
    path: 'inscrever',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

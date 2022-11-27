import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditarEmprestimoComponent } from './views/editar-emprestimo/editar-emprestimo.component';
import { EmprestimoComponent } from './views/emprestimo/emprestimo.component';
import { HomeComponent } from './views/home/home.component';
import { InscreverComponent } from './views/inscrever/inscrever.component';
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
    component: HomeComponent,
    canActivate: [AuthGuard],
    title: "Home | Bibliotech"
  },
  {
    path: 'livros',
    component: LivrosComponent,
    canActivate: [AuthGuard],
    title: "Home | Bibliotech"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Bibliotech"
  },
  {
    path: 'emprestimo',
    component: EmprestimoComponent,
    canActivate: [AuthGuard],
    title: "Emprestimo | Bibliotech"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    title: "Painel de Controle | Bibliotech"
  },
  {
    path: 'emprestimo/:id',
    component: EditarEmprestimoComponent,
    canActivate: [AuthGuard],
    title: "Editar Emprestimo | Bibliotech"
  },
  {
    path: 'inscrever',
    component: InscreverComponent,
    title: "Inscrever-se | Bibliotech"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

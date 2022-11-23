import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditColaboradorComponent } from './pages/edit-colaborador/edit-colaborador.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewColaboradorComponent } from './pages/new-colaborador/new-colaborador.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

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
    title: "Home | Collaborators"
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuard],
    title: "Usuarios Cadastrados | Collaborators"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Collaborators"
  },
  {
    path: 'create',
    component: CadastrarUsuarioComponent,
    title: "Cadastre-se | Collaborators"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    title: "Painel de controle | Collaborators"
  },
  {
    path: 'dashboard/new',
    component: NewColaboradorComponent,
    canActivate: [AuthGuard],
    title: "Novo colaborador | Collaborators"
  },
  {
    path: 'dashboard/edit/:id',
    component: EditColaboradorComponent,
    canActivate: [AuthGuard],
    title: "Editar colaborador | Collaborators" 
  },
  {
    path: 'edit/:id',
    component: EditUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

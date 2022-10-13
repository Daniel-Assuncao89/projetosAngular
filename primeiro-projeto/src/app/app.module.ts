import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  /**
   * --> declarations serve para registrar componentes, pipes, diretivas e outras estruturas.
   * --> imports serve para registrar outros módulos dentro de outro módulo. exclusivamente para outros módulos
   *  --> providers serve para registrar serviços e interceptadores HTTP
   */
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ProdutoComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
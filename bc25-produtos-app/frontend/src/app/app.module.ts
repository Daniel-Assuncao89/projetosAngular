import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListarProdutosComponent } from './pages/listar-produtos/listar-produtos.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { Error404Component } from './pages/error404/error404.component';
import { MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    ProdutoComponent,
    CadastroComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

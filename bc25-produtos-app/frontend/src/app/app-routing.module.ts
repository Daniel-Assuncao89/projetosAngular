import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
import { ProdutoComponent } from "./pages/produto/produto.component";

// iniciar o roteamento
// importar o modulo de roteamento

// rota -> componente.
/**
 * rotas é responsavel por armazenar as rotas que existem dentro do site.
 * 
 * cada item do array de rotas, é uma nova rota que foi declarada
 */
const rotas: Routes = [
    {
        // http://localhost:4200/produtos
        path: 'produtos',  //caminho para acessar a rota
        component: ListarProdutosComponent
        
    }, // cada objeto é uma rota
    {
        // http://localhost:4200
        path: '', // string vazia rota principal
        redirectTo: 'produtos', //redireciona o usuario.
        pathMatch: 'full'
    },
    {
        path: 'produtos/cadastro',
        component: CadastroComponent
    },
    {
        path: 'produtos/:idProduto', // rota com o parametro idProduto
        component: ProdutoComponent
    }
    
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rotas) // modulo que inicia o roteamento e carrega as rotas que estão dentro do array
    ],
    providers: [],
    exports: [
        RouterModule //exportando o modulo após as rotas terem sido carregadas dentro dele
    ]
})
export class AppRoutingModule {

}
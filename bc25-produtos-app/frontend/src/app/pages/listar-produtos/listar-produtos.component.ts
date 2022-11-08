import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  p: Produto[] = []
  constructor(
    private produtosService: ProdutosApiService
  ) { }

  ngOnInit(): void { // é chamado quando o componente é mostrado na tela (renderizado)
    this.produtosService.listarProdutos().subscribe((prods) =>{  
      this.p = prods
    })
  }

}

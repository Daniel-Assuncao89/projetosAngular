import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  altImg: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'

  p: Produto[] = []
  constructor(
    private produtosService: ProdutosApiService,
    private router: Router
  ) { }

  ngOnInit(): void { // é chamado quando o componente é mostrado na tela (renderizado)
    this.produtosService.listarProdutos().subscribe((prods) =>{  
      this.p = prods
    })
  }

  deletar(idDeletar: Produto) {
    
    this.produtosService.deletarPorId(idDeletar.id as number).subscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtoForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [ Validators.required ]),
    foto: new FormControl(''),
    nome: new FormControl('', [ Validators.required ]),
    preco: new FormControl('', [ Validators.required ])
  })

  altImg: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'

  produto!: Produto
  produtoNaoEncontrado: Boolean = false

  //injetar um objeto que permite acessar os parametros da rota

  constructor(
    private rota: ActivatedRoute, // permite acessar as informações (parametros) da rota que está ativa no momento

    private produtoService: ProdutosApiService
  ) { }



  ngOnInit(): void {
    //paraMap é um objeto que po´ssui acesso a todos os parâmetros da rota atual
    // get funciona para recuperar o valor de um parametro da rota atual
    const idProduto = this.rota.snapshot.paramMap.get('idProduto') as string
    
    

    this.produtoService.procurarPorId(parseInt(idProduto)).subscribe(
      (prod) => {
        this.produto = prod

        this.produtoForm.setValue({
          descricao: prod.descricao,
          nome: prod.nome,
          foto: prod.foto,
          preco: prod.preco
        })
    },
    (erro) => {
        this.produtoNaoEncontrado = true
    }
    )
  }
  /**
   * setValue permite alterar o valor dos campos de um formGroup
   */

  

}

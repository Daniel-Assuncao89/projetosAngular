import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required ]),
    preco: new FormControl('', [ Validators.required ]),
    descricao: new FormControl('', [ Validators.required ]),
    foto: new FormControl('')
  })

  constructor(
    private produtoService: ProdutosApiService,
    private snackBar: MatSnackBar,
    private router: Router // permite fazer o roteamento dentro do arquivo Typescript
  ) { }

  ngOnInit(): void {
  }

  salvarProduto() {
    // recuperar os dados do formulário
    const produto: Produto = this.produtoForm.value // retorna um objeto com as informações do formGroup

    this.produtoService.criarProduto(produto)
    .subscribe(
      (prod) => {
        console.log(prod)
        this.snackBar.open('Produto adicionado com sucesso!', 'Ok');
        // DESAFIO: substituir o alert pelo snackbar do Material
      })

      this.router.navigateByUrl('/produtos')
  }
}
  

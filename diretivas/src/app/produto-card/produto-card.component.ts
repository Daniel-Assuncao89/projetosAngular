import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input()
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  @Output() excluindoEvent = new EventEmitter<String>();

  excluir(indexExclusao: String){
    this.excluindoEvent.emit(indexExclusao)
  }

  mostrarProduto: boolean = true

  esconderProduto(): void {
    if(this.mostrarProduto){
      this.mostrarProduto = false
    } else {
      this.mostrarProduto = true
    }
  }

  // showProduto(): void {
  //   if(!this.mostrarProduto) {
  //     this.mostrarProduto = true
  //     }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}

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

  mostrarProduto: boolean = true

  @Output()
  deletar: EventEmitter<Produto> = new EventEmitter<Produto>()

  emitirEventoDeletar(): void {
    this.deletar.emit(this.prod)
  }

  esconderProduto(): void {
    this.mostrarProduto = false
  }

  aparecerProduto(): void {
    this.mostrarProduto = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

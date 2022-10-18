import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input()
  nomeCartao: string = 'Seu Nome'

  @Input()
  numeroCartao: string = "0000000000"
  
  @Input()
  mes: number = 0

  @Input()
  ano: number = 0

  @Input()
  cvc: number = 0

  
  constructor() { }

  ngOnInit(): void {
  }

}

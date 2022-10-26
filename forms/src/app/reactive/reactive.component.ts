import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive forms possui estruturas para representar o formulario dentro do TypeScript
   FormControl representa um elemento do seu formulario 
  */

  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')

  /**
   * FormGroup é uma estrutura do Reactive Forms que permite agruparmos forms controls dentro dela, para que o acesso aos valores seja mais facil
   */

  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })
    
  

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    /**
     * A propriedade 'value' possui o valor que foi digitado dentro do capmo do formulário
     */
   // console.log(this.nome.value)
   // console.log(this.email.value)
   // console.log(this.senha.value)
    console.log(this.dadosForm.value)
  }

}

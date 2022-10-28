import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

/*   dadosForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl(''),
    endereco: new FormGroup({
      cep: new FormControl(''),
      rua: new FormControl(''),
      complemento: new FormControl(''),
      numero: new FormControl('')
    })
  }) */
    
  /**
   * FormArray -> Array que armazena form controls, form groups ou outros form arrays. Precisa estar dentro de um FormGroup
   */
  dadosForm: FormGroup  = this.fb.group({
    nome: ['' , [ Validators.required, Validators.minLength(5) ]],
    email: [''],
    senha: [''],
    endereco: this.fb.group({
      cep: [''],
      rua: [''],
      complemento: [''],
      numero: ['']
    }),
    telefones: this.fb.array([
      [''] // Pode utilizar new FormControl('')
    ])
  })
  /**
   * Transformar o abstract control -> Form Array
   */
  tels = this.dadosForm.get('telefones') as FormArray
  /**
   * Form Builder -> objeto que permite criar FormControls, FormGroups ou FormsArrays com uma sintaxe menor
   */

  constructor(
    private fb: FormBuilder
    ) { }

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

  adicionarCampoDeTelefone(){
    this.tels.push(new FormControl(''))
  }
}

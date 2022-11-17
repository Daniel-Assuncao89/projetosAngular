import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cidade, Estados, Ponto } from '../interfaces/localidades';
import { LocalidadeApiService } from '../services/localidade-api.service';

@Component({
  selector: 'app-cadastro-ponto-venda',
  templateUrl: './cadastro-ponto-venda.component.html',
  styleUrls: ['./cadastro-ponto-venda.component.css']
})
export class CadastroPontoVendaComponent implements OnInit {
  localidadeForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    estado: new FormControl ('', [Validators.required]),
    cidade: new FormControl ('', [Validators.required]),
    ponto: new FormControl ('', [Validators.required]),
    inicio: new FormControl ('', [Validators.required]),
    termino: new FormControl ('', [Validators.required])
  })

  gEstado: Estados[] = []
  gCidade: Cidade[] = []
  pontoVenda: Ponto[] = []

  constructor(
    private localidadeService: LocalidadeApiService
  ) { }

  ngOnInit(): void {
    this.localidadeService.estado().subscribe((e) => {
      this.gEstado = e
      console.log(this.gEstado)
    })
  }

  uf(uf: string){
    this.localidadeService.cidade(uf).subscribe((c) => {
      this.gCidade = c
    })
  }

  salvarPonto(){
   const salvar: Ponto = this.localidadeForm.value
   this.pontoVenda.push(salvar)
  }

  listarCidades(){
    this.gCidade
  }
}

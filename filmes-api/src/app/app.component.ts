import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArrayGeral } from './interfaces/array-geral';
import { Filmes } from './interfaces/filmes';
import { FilmesApiService } from './services/filmes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmeForm: FormGroup = this.fb.group({
    paginas: ['', [Validators.required] ],
    nome: ['', [Validators.required]]
  })

  gFilme!: ArrayGeral
  g!: ArrayGeral

  constructor(
    private fb: FormBuilder,
    private filmesService: FilmesApiService
  ){}

  procurar(){
    const pagina = this.filmeForm.get('paginas')?.value

    this.filmesService.procurarFilme(pagina).subscribe((geral) => {
      console.log(geral)
      this.gFilme = geral
    })
  }

  buscaPorNome(){
    const nome = this.filmeForm.get('nome')?.value

    this.filmesService.procurarNome(nome).subscribe((nome) =>{
      console.log(nome)
      this.g = nome
    })
  }
  
}

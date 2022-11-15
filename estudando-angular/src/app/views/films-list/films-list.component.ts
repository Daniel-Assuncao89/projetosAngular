import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

    filmesForm: FormGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      year: new FormControl('',[Validators.required] )
    })

  constructor(private filmeService: FilmeService) { }

  public filmes: Filme[] = [];

  cadastrar: boolean = false

  ngOnInit(): void {
    this.filmeService.getAll().subscribe(filmes => {
      this.filmes = filmes;
    });
  }

  cadastro(){
    this.cadastrar = !this.cadastrar
  }
  salvarFilme(){
    const filme: Filme = this.filmesForm.value

    this.filmeService.salvar(filme).subscribe(
      (f) => {
        alert('Filme adicionado com sucesso')
      }
    )
  }
}

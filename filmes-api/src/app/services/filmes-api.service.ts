import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrayGeral } from '../interfaces/array-geral';
import { Filmes } from '../interfaces/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesApiService {

  private readonly baseURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=875db3a04ae3d664930acfe922315150&language=pt-BR'

  private readonly baseURL2 = 'https://api.themoviedb.org/3/search/movie?api_key=875db3a04ae3d664930acfe922315150&language=pt-BR&query='

  constructor(
    private http: HttpClient
  ) { }

  procurarFilme(pagina: number){
    return this.http.get<ArrayGeral>(this.baseURL + "&page=" + pagina)
  }

  procurarNome(nome: string){
    return this.http.get<ArrayGeral>(this.baseURL2 + nome)
  }
}

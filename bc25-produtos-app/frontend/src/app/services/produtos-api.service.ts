import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  private readonly baseURL: string = 'http://localhost:3000/produtos'

  constructor(
    private http: HttpClient
  ) { }

  listarProdutos(){
    return this.http.get<Produto[]>(this.baseURL)
  }

  procurarPorId(id: number) {
    return this.http.get<Produto>(this.baseURL +"/" + id) // Requisição para recuperar um produto por id
  }

  criarProduto(prod: Produto) { // prod possui as informações do produto que será salvo
    
    return this.http.post<Produto>(this.baseURL, prod)
  }

  deletarPorId(id: number) {
    return this.http.delete<void>(this.baseURL + "/"+ id)
  }
}

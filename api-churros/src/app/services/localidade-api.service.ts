import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade, Estados } from '../interfaces/localidades';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeApiService {

  private readonly ufURL: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

  constructor(
    private http: HttpClient
  ) { }

  cidade(uf: string){
    return this.http.get<Cidade[]>(this.ufURL + "/" + uf + "/distritos")
  }

  estado(){
    return this.http.get<Estados[]>(this.ufURL)
  }
}

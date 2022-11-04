import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CepFind } from '../interfaces/cep-find'

@Injectable({
  providedIn: 'root'
})
export class CepApiService {

  private readonly url: string = 'https://viacep.com.br/ws/'

  constructor( private http: HttpClient ) { }

  procurarCep(cep: number) {

    return this.http.get<CepFind>(this.url + cep + "/json")
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`).pipe(
      catchError(error => {
        alert('Erro ao buscar dados de clientes')
        console.error(error)
        return EMPTY
      })
    )
  }
  
  public create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente).pipe(
      catchError(error => {
        alert("Erro ao criar novo cliente")
        console.error(error)
        return EMPTY
      })
    )
  }

  public delete(id: number) {
    
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`).pipe(
      catchError(error => {
        alert("Erro ao deletar")
        console.error(error)
        return EMPTY
      })
    )
  }

}

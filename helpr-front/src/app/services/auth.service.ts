import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate (credenciais: Credential) { // passar as credencias
    // requisitar o token de autorização
    
    return this.http.post<Token>( `${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.accessToken)
      }),
      catchError(error => {
        alert("Erro ao autenticar!")
        console.error(error)

        return EMPTY
      })
    )

    // autenticar

  }

}

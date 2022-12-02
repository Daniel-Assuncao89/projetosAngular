import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Credentials } from '../interfaces/credentials';
import { Token } from '../interfaces/token';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  public authenticate (credenciais: Credentials): Observable<Token> { // passar as credencias
    // requisitar o token de autorização
    
    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.acessToken)
      }),
      catchError(error => {
        alert("Erro ao autenticar!")
        console.error(error)

        return EMPTY
      })
    )
    }
   // autenticar

   public isAuthenticate(): boolean {
    let flag: boolean = false
    const token = localStorage.getItem("token");
    if(token){
      // Verifica se o token ta expirado
      flag = !this.jwt.isTokenExpired(token)
    }
    return flag
   }

}

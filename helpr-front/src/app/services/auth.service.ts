import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate (credenciais: Credential) { // passar as credencias
    // requisitar o token de autorização
    const  baseUrl = "http://localhost:8080";
    return this.http.post<Token>( `${baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.accessToken)
      })
    )

    // autenticar

  }

}

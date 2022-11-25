import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NotificationService } from './notification.service';
import { GoogleAuthProvider } from 'firebase/auth'
import { catchError, EMPTY, from } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireBaseAuth: AngularFireAuth,
    private notification: NotificationService
  ) { }

  public googleAuth() {
    const provider = new GoogleAuthProvider()
    const promise = this.fireBaseAuth.signInWithPopup(provider);
    return from(promise).pipe(
      catchError(error => {
        return EMPTY
      })
    )
  }

  public autenticarEmaileSenha(user: User){
    const { email, senha} = user
    const promise =  this.fireBaseAuth.signInWithEmailAndPassword(email, senha)
    return from(promise).pipe(
      catchError(error => {
        if(error.code == "auth/user-not-found"){
          this.notification.message("Usuario não cadastrado")
        } else if (error.code == "auth/wrong-password"){
          this.notification.message("Senha incorreta")
        } else {
          this.notification.message("Erro na autenticação")
          console.error(error)
        }
        return EMPTY
      })
    )
  }

  public criarUsuario(user: User){
    const { email, senha } = user
    const promise = this.fireBaseAuth.createUserWithEmailAndPassword(email, senha)
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao cadastrar usuario")
        console.error(error)
        return EMPTY
      })
    )
  }

  public logout() {
    const promise = this.fireBaseAuth.signOut()
    return from(promise)
  }
}

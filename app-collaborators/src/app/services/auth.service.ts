import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, catchError, EMPTY } from 'rxjs'
import { GoogleAuthProvider } from 'firebase/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuarios } from '../interfaces/usuarios';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private fireBaseAuth: AngularFireAuth, private fireStore: AngularFirestore, private notification: NotificationService) { }

  //--------Authentication: Criação de usuario para autenticar. Autenticação e fireStore não se comunicam normalmente.

  public authenticateByGoogle(): Observable<any>{
    const provider = new GoogleAuthProvider();
    const promise = this.fireBaseAuth.signInWithPopup(provider);
    // converte a primise em um observable
    return from(promise).pipe(
      catchError((error) =>{
        this.notification.showMessage("Erro ao autenticar com Google")
        console.error(error);
        return EMPTY
      })
    ) 
  }

  public authenticateByEmailAndPassword(user: Usuarios) {
    const { email, senha } = user;
    const promise = this.fireBaseAuth.signInWithEmailAndPassword(email,senha);
    return from(promise).pipe(
      catchError(error => {
        if(error.code == "auth/user-not-found"){
          this.notification.showMessage("Usuario não cadastrado")
        } else if(error.code == "auth/wrong-password"){
          this.notification.showMessage('Senha incorreta')
        } else {
          this.notification.showMessage('Erro ao autenticar');
          console.error(error);
        }
        return EMPTY
      })
    )
  }

  public createUserEmailAndPassword(user: Usuarios) {
    const { email, senha } = user;
    const promise = this.fireBaseAuth.createUserWithEmailAndPassword(email,senha);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao cadastrar usuário");
        console.error(error);
        return EMPTY;
      })
    )
  }

  logout() {
   const promise = this.fireBaseAuth.signOut();
   return from(promise);
  }

//----------------CRUD Abaixo com FireStore Database ---------------------------
  getUserDoc(id: string){
    return this.fireStore.collection('usuarios-collection').doc(id).valueChanges();
  }

  getUserList(){
    return this.fireStore.collection('usuarios-collection').snapshotChanges();
  }

  createUser(usuario: Usuarios){
    return new Promise<any>((resolve, reject) => {
      this.fireStore.collection('usuarios-collection').add(usuario).then(response => { console.log(response)}, error => reject(error))
    });
  }

  deleteUser(usuario: Usuarios){
    return this.fireStore.collection('usuarios-collection').doc(usuario.id).delete()
  }

  updateUser(usuario: Usuarios, id: string){
    return this.fireStore.collection('usuarios-collection').doc(id).update({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha
    });
  }
}

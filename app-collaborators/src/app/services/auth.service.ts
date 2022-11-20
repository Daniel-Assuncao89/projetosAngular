import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs'
import { GoogleAuthProvider } from 'firebase/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireBaseAuth: AngularFireAuth, private fireStore: AngularFirestore) { }

  public authenticateByGoogle(): Observable<any>{
    const provider = new GoogleAuthProvider();
    const promise = this.fireBaseAuth.signInWithPopup(provider);
    return from(promise) // converte a primise em um observable
  }

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

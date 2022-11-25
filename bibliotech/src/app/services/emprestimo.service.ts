import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Emprestimo } from 'src/app/interfaces/emprestimo';
import { EMPTY, from, Observable } from 'rxjs';
import { NotificationService } from './notification.service';
import { catchError, map } from 'rxjs/operators';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(
    private firestore: AngularFirestore,
    private notification: NotificationService,
    ) { }

  public novoEmprestimo(emprestimo: Emprestimo): Observable<any> {
    const promise = this.firestore.collection("livros").add(emprestimo);

    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao cadastrar");
        console.log(error);
        return EMPTY;
      })
    )
  }

  // public findAll(): Observable<any>{
  //   const promise = this.firestore.collection("livros").get();

  //   return from(promise).pipe(

  //     map((response: any) => {

  //       return response.docs.map((doc:any) => { 
  //         const emprestimo: Emprestimo = doc.data() as Emprestimo;
  //         emprestimo.id = doc.id;
  //         return emprestimo;
  //       })

  //     }),
  //     catchError(error => {
  //       this.notification.message("Erro ao buscar dados");
  //       console.log(error);
  //       return EMPTY;
  //     })
  //   )
  // }

  // public findById(id: string): Observable<any>{
  //   const promise = this.firestore.collection("livros").doc(id).get();

  //   return from(promise).pipe(
  //     map(doc =>{
  //       const emprestimo: Emprestimo = doc.data() as Emprestimo;
  //       emprestimo.id = doc.id;
  //       return emprestimo;
  //     }),
  //     catchError(error => {
  //       this.notification.message("Erro ao buscar pelo id");
  //       console.log(error);
  //       return EMPTY;
  //     })
  //   )
  // }

  public deleteEmprestimo(id: string){
    const promise = this.firestore.collection("livros").doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao excluir empréstimo");
        console.log(error);
        return EMPTY;
      })
    );
  }

  public updateEmprestimo(emprestimo: Emprestimo){
    const promise = this.firestore.collection("livros").doc(emprestimo.id).update(emprestimo);
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao atualizar");
        console.log(error);
        return EMPTY;
      })
    );
  }

    
}

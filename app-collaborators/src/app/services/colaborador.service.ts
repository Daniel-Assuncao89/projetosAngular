import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, EMPTY, map } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { Collaborator } from '../interfaces/collaborator';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  

  constructor(private fireStore: AngularFirestore, private notification: NotificationService) { }

  public createColaborador(colaborador: Collaborator) {
    const promise = this.fireStore.collection('colaboradores').add(colaborador);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao cadastrar.");
        console.error(error);
        return EMPTY;
      }) 
    )
  }

  public findAll() {
    const promise = this.fireStore.collection('colaboradores').get();
    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const colaborador: Collaborator = doc.data() as Collaborator;
          colaborador.id = doc.id
          return colaborador;
        })
      }),
      catchError(error => {
        this.notification.showMessage("Erro ao buscar os dados.")
        console.log(error);
        return EMPTY
      })
    )
  }

  public deleteColaborador(id: string) {
    const promise = this.fireStore.collection('colaboradores').doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao excluir")
        console.error(error)
        return EMPTY
      })
    )
  }

  public buscarPorColaborador(id: string) {
    const promise = this.fireStore.collection('colaboradores').doc(id).get()
    return from(promise).pipe(
      map(doc => {
        const colaborador: Collaborator = doc.data() as Collaborator
        colaborador.id = doc.id
        return colaborador
      }),
      catchError(error => {
        this.notification.showMessage("Erro ao buscar pelo id")
        console.error(error)
        return EMPTY
      })
    )
  }

  updateColaborador(colaborador: Collaborator) {
    const promise = this.fireStore.collection('colaboradores').doc(colaborador.id).update(colaborador)
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao Atualizar")
        console.error(error);
        return EMPTY
      })
    )
  }
}

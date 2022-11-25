import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, EMPTY, from, map } from 'rxjs';
import { Book } from '../interfaces/book';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private fireStore: AngularFirestore, private notification: NotificationService) { }

  public criarLivro(livro: Book) {
    const promise = this.fireStore.collection('livros').add(livro);
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao cadastrar.");
        console.error(error);
        return EMPTY;
      }) 
    )
  }
  public findAll() {
    const promise = this.fireStore.collection('livros').get();
    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const livros: Book = doc.data() as Book;
          livros.id = doc.id
          return livros;
        })
      }),
      catchError(error => {
        this.notification.message("Erro ao buscar os dados.")
        console.log(error);
        return EMPTY
      })
    )
  }

  
  public deleteLivro(id: string) {
    const promise = this.fireStore.collection('livros').doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao excluir")
        console.error(error)
        return EMPTY
      })
    )
  }


  updateLivro(livro: Book) {
    const promise = this.fireStore.collection('livros').doc(livro.id).update(livro)
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro ao Atualizar")
        console.error(error);
        return EMPTY
      })
    )
  }
}

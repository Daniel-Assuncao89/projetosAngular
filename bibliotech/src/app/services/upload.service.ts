import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { catchError, EMPTY, from } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: AngularFireStorage, private notification: NotificationService) { }

  public uploadFoto(capa: File) {
    const promise = this.storage.upload(`capas/${Date.now()}`, capa)
    return from(promise).pipe(
      catchError(error => {
        this.notification.message("Erro no envio do arquivo")
        console.error(error)
        return EMPTY
      })
    )
  }

}
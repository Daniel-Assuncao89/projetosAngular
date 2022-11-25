import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  public message(msg: string){
    this.snackBar.open(msg, 'Fechar', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    })
  }
}


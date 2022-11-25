import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Usuarios} from 'src/app/interfaces/usuarios'
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    fb:FormBuilder,
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
    ) {
      this.formLogin = fb.group ({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      })
     }

  ngOnInit(): void {
  }

  public signInGoogle(): void{
    this.authService.authenticateByGoogle().subscribe((credentials) => {
      this.notification.showMessage('Bem-vindo(a)! Autenticado pelo Google')
      this.router.navigate(["/home"])
      })
  }

  public signInEmailAndPassword(): void{
    if(this.formLogin.valid){
      const user: Usuarios = this.formLogin.value; // atribui os valors do fomulario a variavel
      this.authService.authenticateByEmailAndPassword(user).subscribe((credentials) => {
      this.notification.showMessage('Bem-vindo(a)! Autenticado com Email e Senha')
      this.router.navigate(["/home"])
    })
    } else {
      this.notification.showMessage("Dados invalidos.");
    }
  }
}

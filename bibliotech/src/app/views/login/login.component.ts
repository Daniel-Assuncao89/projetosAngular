import { Router } from '@angular/router';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
  ) {
    this.formLogin = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public signInGoogle(): void {
    this.authService.googleAuth().subscribe(credencials => {
      this.notification.message("Bem-vindo(a)!");
      this.router.navigate(["/home"]);
    });
  }

  public signInEmailAndPassword(): void {
    if(this.formLogin.valid) {
      const user: User = this.formLogin.value;
      this.authService.autenticarEmaileSenha(user).subscribe(credencials => {
        this.notification.message("Bem-vindo(a)!");
        this.router.navigate(["/home"]);
      });
    }
    else {
      this.notification.message("Dados inválidos.");
    }
  }
}
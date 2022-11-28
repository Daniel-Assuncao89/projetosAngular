import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-inscrever',
  templateUrl: './inscrever.component.html',
  styleUrls: ['./inscrever.component.css']
})
export class InscreverComponent implements OnInit {

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

  public criarUsuario(): void {
    if(this.formLogin.valid) {
      const user: User = this.formLogin.value;
      this.authService.criarUsuario(user).subscribe(credencials => {
        this.notification.message("Cadastrado com Sucesso!");
        this.router.navigate(["/login"]);
      });
    }
    else {
      this.notification.message("Dados inválidos.");
    }
  }
}
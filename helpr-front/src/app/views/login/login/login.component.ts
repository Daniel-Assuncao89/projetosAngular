import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.formLogin = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    if(this.formLogin.valid) {
      // Processo de autenticar
      const credenciais: Credentials = this.formLogin.value
      this.authService.authenticate(credenciais).subscribe(response => {
        alert("Autenticado")
        console.log(credenciais)
        this.router.navigate(["/home"])
      })
    } else {
      alert("Dados invalidos")
    }
  }
}

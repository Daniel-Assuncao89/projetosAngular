import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public userForm: FormGroup

  constructor(
    public userService: AuthService,
    public fb: FormBuilder,
    public router: Router,
    public notification: NotificationService
  ) { 
    this.userForm = this.fb.group({
      nome: [''],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['home'])
  }

  public singInGoogle(){
    this.userService.authenticateByGoogle().subscribe(credentials => {
      this.notification.showMessage("Bem-vindo(a)!");
      this.router.navigate(["/home"])
    })
  }

  public createUserEmailAndPassword(): void {
    const user: Usuarios = this.userForm.value;
    this.userService.createUserEmailAndPassword(user).subscribe(response => {
      this.notification.showMessage("Usuário cadastrado.");
      this.router.navigate(["/login"]);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    public router: Router
  ) { 
    this.userForm = this.fb.group({
      nome: ['', [Validators.required]],
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

}

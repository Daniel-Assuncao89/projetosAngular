import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubRepos, GithubUser } from './interfaces/githubUser';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser
  gRepo: GithubRepos[] = []

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService,
    private snackBar: MatSnackBar // componente do material para mostrar mensagens
  ) {}

  procurar(){
    const username = this.githubForm.get('username')?.value // recuperando o valor.
    //console.log(username)
    this.githubService.procurarUsuario(username).subscribe((user) => {
      //console.log(user)
     // console.log(`O usuario ${user.login} tem ${user.followers} seguidores`)
     this.gUser = user
    },
    (erro) => {
      // HttpErrorResponse
      // preciso saber se o meu erro vem dessa classe

      if (erro instanceof HttpErrorResponse) {
        if (erro.status == 404) {
          this.snackBar.open(`Usuario ${username} not found`, 'OK')
        }
      }
    }
    )
    this.githubService.procurarRepo(username).subscribe((repos) => {
      //console.log(user)
     // console.log(`O usuario ${user.login} tem ${user.followers} seguidores`)
     console.log(repos)
     this.gRepo = repos
    })
  }
}

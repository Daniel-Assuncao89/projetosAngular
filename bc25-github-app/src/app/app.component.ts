import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  gRepo!: GithubRepos

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService
  ) {}

  procurar(){
    const username = this.githubForm.get('username')?.value // recuperando o valor.
    //console.log(username)
    this.githubService.procurarUsuario(username).subscribe((user) => {
      //console.log(user)
     // console.log(`O usuario ${user.login} tem ${user.followers} seguidores`)
     this.gUser = user
    })
    this.githubService.procurarRepo(username).subscribe((repos) => {
      //console.log(user)
     // console.log(`O usuario ${user.login} tem ${user.followers} seguidores`)
     this.gRepo = repos
     console.log(repos)
    })
  }
}

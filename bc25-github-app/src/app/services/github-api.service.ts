import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { GithubRepos, GithubUser } from '../interfaces/githubUser';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/'

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Métodos HTTP:
   *  - Leitura de dados: GET
   *  - Criação de dados: POST
   *  - Atualização de dados: PUT
   *  - Deleção de dados: DELETE
   */
  procurarUsuario(username: string) {
    /**
     * o objeto http, responsavel por fazer as requisições, possui o metodo get(), que serve para fazer requisições HTTP utilizando o verbo GET. Basta apenas passar a URL de acesso como parametro
     */
    return this.http.get<GithubUser>(this.baseURL + username) // retorna um observable
  }
  
    procurarRepo(username:string) {
      return this.http.get<GithubRepos[]>(this.baseURL + username + "/repos")
    }
}

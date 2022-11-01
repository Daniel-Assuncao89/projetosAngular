import { Injectable } from '@angular/core';

/**
 * providerIn infroma onde o servico será fornecido
 * 
 * A ideia de um servico no Angular é encapsular alguma logica que pode ser utilizada em varios locais da sua aplicação
 */

interface Cliente {
  nome: string
  sobrenome: string
  cpf: string
  email: string
  telefone: string
  id: number
}

/**
 * C -> Create
 * R -> Read
 * U -> Update
 * D -> Delete
 */

@Injectable({
  providedIn: 'root' // 'root' faz referencia ao AppModule
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'Lucas',
      sobrenome: 'Fernan',
      cpf: '22222222222',
      email: 'fernan@gmail.com',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Joao',
      sobrenome: 'German',
      cpf: '33333333333',
      email: 'joao@gmail.com',
      telefone: '40028922',
      id: 3
    }
  ]

  constructor() { }

  listarClientes(): Cliente[]{
    // toda a logica para acessar a api e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined{
    /**
     * o metodo find() dos arrays serve para procurar algum valor dentro do array. É necessario que se passe como parametro do metodo find() uma função. Essa função será utilizada dentro do metodo para procurar um valor.
     * A função que será passada deve retornar sempre um valor booleano
     */
    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    })

    return clienteEncontrado
  }
}

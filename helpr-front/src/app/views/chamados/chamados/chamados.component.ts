import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/interfaces/chamado';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  dataSource: Chamado[] = [{
    idChamado: 1,
    titulo: "Chamado 1",
    descricao: "Chamado para teste",
    dataAbertura: "12-04-2022",
    status: "ATRIBUIDO",
    cliente: {
      nome: "Gabriel teste",
      cpf: "123456789",
      email: "gabriel@mail.com",
      telefone: "123456789",
      senha: "1234"
    },
    funcionario: {
      nome: "José Almir"
    }
  }]

  constructor() { }

  ngOnInit(): void {
  }

}

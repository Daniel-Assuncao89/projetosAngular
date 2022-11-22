import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/interfaces/collaborator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];

  dataSource: Collaborator[] = [
    {
      nome: "Gabriel",
      email: "gabriel@gmail.com",
      cpf: "000.000.000-00",
      setor: "Academico",
      cargo: "Professor de Tecnologia",
      estado: "Cerá",
      cidade: "Tianguá",
      salario: 3721988,
      dataNascimento: new Date,
      fotoUrl: "https://st.depositphotos.com/1898481/3858/i/600/depositphotos_38585251-stock-photo-unnamed.jpg"
    }
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}

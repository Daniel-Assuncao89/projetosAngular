import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/interfaces/collaborator';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];

  dataSource: Collaborator[] = [] ;

  constructor(private colaboradorService: ColaboradorService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.inicializarTabela();
  }

  private inicializarTabela(): void {
    this.colaboradorService.findAll().subscribe(colaboradores => {
      this.dataSource = colaboradores
    })
  }

  public deleteColaborador(id: string): void {
    this.colaboradorService.deleteColaborador(id).subscribe(response => {
      this.notification.showMessage("Deletado")
      this.inicializarTabela();
    })
  }
}

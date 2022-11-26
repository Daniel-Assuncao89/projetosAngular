import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Emprestimo } from 'src/app/interfaces/emprestimo';
import { BookService } from 'src/app/services/book.service';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['leitor', 'livro', 'data', 'status', 'excluir', 'editar', 'capa'];

  dataSource: Emprestimo[] = []  ;

  public fotoUrl: string = ""

  constructor(private notification: NotificationService, private livroService: BookService, private router: Router, private emprestimoService: EmprestimoService) {}

  ngOnInit(): void {
    this.inicializarTabela()
  }

  deletarEmprestimo(id: string){
   this.emprestimoService.deleteEmprestimo(id).subscribe(response => {
    this.notification.message("Deletado")
    this.inicializarTabela();
   })
  }

  openDetails(id: string){
    
  }

  private inicializarTabela() {
    this.emprestimoService.findAll().subscribe(emprestimo => {
      this.dataSource = emprestimo
    })
  }
}

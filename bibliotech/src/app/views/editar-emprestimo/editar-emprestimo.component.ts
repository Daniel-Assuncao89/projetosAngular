import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Emprestimo } from 'src/app/interfaces/emprestimo';
import { BookService } from 'src/app/services/book.service';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  public emprestimo!: Emprestimo
  public books: Book[] = []

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private notification: NotificationService,
    private emprestimoService: EmprestimoService,
    private route: ActivatedRoute,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.inicializarCampos()
    this.mostrarLivros()
  }

  public inicializarCampos(): void {
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.emprestimoService.findEmprestimoById(id).subscribe(emprestimo => {
      this.emprestimo = emprestimo
      
    })
  }

  public mostrarLivros(){
    this.bookService.findAll().subscribe(response =>{
      this.books = response
    })
   
  }

  updateEmprestimo(form: NgForm){
    if(form.valid) {
      this.emprestimoService.updateEmprestimo(this.emprestimo).subscribe((resp) => {
        this.notification.message("Atualizado com sucesso");
        this.router.navigate(["/dashboard"])
      })
    } else {
      this.notification.message("Dados inválidos")
    } 
  }
}

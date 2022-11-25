import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Emprestimo } from 'src/app/interfaces/emprestimo';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  public formEmprestimo: FormGroup;

  books: Book[] = [];

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private notification: NotificationService,
    private emprestimoService: EmprestimoService,
  ) {
    this.formEmprestimo = fb.group({
      leitor: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", [Validators.required]],
      status: ["", [Validators.required]],
      livro:["", [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.mostrarLivros()
  }

  public novoEmprestimo():void{
    if(this.formEmprestimo.valid){
      const emprestimo: Emprestimo = this.formEmprestimo.value;
      
      this.emprestimoService.novoEmprestimo(emprestimo).subscribe(response => {
        this.notification.message("Cadastrado com sucesso");
        this.router.navigateByUrl("/dashboard");
      })

      
    } else {
      this.notification.message("Dados inválidos");
    }
  }

  public mostrarLivros(){
    this.bookService.findAll().subscribe(response =>{
      this.books = response
    })
   
  }
}

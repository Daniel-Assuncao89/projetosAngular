import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {


  public livroForm: FormGroup

  public isLoading: Boolean = false

  displayedColumns = ['titulo', 'categoria', 'autor', 'isbn', 'excluir'];

  public dataSource: Book[] = [] ;

  private capa: string = ""

  constructor(private fb: FormBuilder, private notification: NotificationService, private livroService: BookService, private router: Router, private uploadService: UploadService) { 
    this.livroForm = fb.group({
      titulo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.inicializarTabela()
  }

  public criarLivro(): void {
    if(this.livroForm.valid) {
      const livro: Book = this.livroForm.value
      livro.capa = this.capa
      this.livroService.criarLivro(livro).subscribe((resp) => {
        this.notification.message("Cadastrado com sucesso");
        this.inicializarTabela()
      })
    } else {
      this.notification.message("Dados inválidos")
    }
  }

  public uploadFile(event: any): void {
    this.isLoading = true; // Inicio do carregamento da foto
    const file: File = event.target.files[0];
    this.uploadService.uploadFoto(file).subscribe(uploadResult => {
      this.isLoading = false // Quando entra nesta função o carregamento da foto foi concluido.
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((capa: string) => {
        this.capa = capa
      })
    })
  }

  private inicializarTabela() {
    this.livroService.findAll().subscribe(livros => {
      this.dataSource = livros
    })
  }

  public deletarLivro(id: string) {
    this.livroService.deleteLivro(id).subscribe(response => {
      this.notification.message("Deletado")
      this.inicializarTabela();
    })
    }

    
}
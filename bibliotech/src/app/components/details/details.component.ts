import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/interfaces/book';
import { Emprestimo } from 'src/app/interfaces/emprestimo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public livros: Emprestimo) { }

  ngOnInit(): void {
  }

}

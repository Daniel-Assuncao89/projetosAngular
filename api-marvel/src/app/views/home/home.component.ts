import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Comics } from 'src/app/interfaces/comics';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public comic!: Comics

  constructor(private apiService: MarvelApiService) { }

  ngOnInit(): void {
    this.showComics()
  }

  showComics(){
    this.apiService.seekComics().subscribe((geral) => {
      this.comic = geral
      console.log(geral)
    })
  }

}

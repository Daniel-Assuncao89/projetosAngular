import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/comics';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public char!: Characters

  constructor(private apiService: MarvelApiService) { }

  ngOnInit(): void {
    this.showCharacters()
  }

  showCharacters(){
    this.apiService.seekCharacters().subscribe((geral) => {
      this.char = geral
      console.log(geral)
    })
  }

}

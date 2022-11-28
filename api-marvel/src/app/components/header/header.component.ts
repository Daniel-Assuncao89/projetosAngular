import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/comics';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public characters!: Characters

  constructor(private apiService: MarvelApiService) { }

  ngOnInit(): void {
  }

  public showCharacters(){
    return this.apiService.seekCharacters().subscribe((char) => {
      this.characters = char
    })
  }

}

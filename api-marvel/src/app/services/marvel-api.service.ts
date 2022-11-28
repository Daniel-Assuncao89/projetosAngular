import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters, Comics } from '../interfaces/comics';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private readonly baseUrlComics = 'https://gateway.marvel.com/v1/public/comics?ts=1669252818&apikey=cfef5544226fccdc9072c31d130c5650&hash=dbe71fd710421d413c8838bcca7446fd'

  private readonly baseUrlCharacters = 'https://gateway.marvel.com/v1/public/characters?ts=1669252818&apikey=cfef5544226fccdc9072c31d130c5650&hash=dbe71fd710421d413c8838bcca7446fd'

  private readonly ts = 1669252818

  private readonly apiKey = 'cfef5544226fccdc9072c31d130c5650'

  private readonly hash = 'dbe71fd710421d413c8838bcca7446fd'


  constructor(private http: HttpClient) { }

  seekComics() {
    return this.http.get<Comics>(this.baseUrlComics)
  }

  seekCharacters(){
    return this.http.get<Characters>(this.baseUrlCharacters)
  }
}

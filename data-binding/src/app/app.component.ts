import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * --> String Interpolation: utilizar valores que propriedades possuem para mostrá-los para o usuario
   * 
   * --> Property binding: utilizar valores de propriedades para atribui-los a atributos HTML
   * 
   *  --> Event binding: utilizado para ouvir eventos da DOM dentro do angular
   * 
   *  --> Two Ways binding: binding de duas vias.
   */
  title = 'data-binding';
  tipoInput: string = 'password'

  n1: number = 0
  n2: number = 0
  
  somar(x: number, y:number){
    return x + y
  }

  mudarTipoDoInput(): void {
    if(this.tipoInput == 'password'){
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }
}

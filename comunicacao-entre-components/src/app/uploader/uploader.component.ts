import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  /**
   * Event emitter é uma classe que te permite criar eventos customizados dentro do angular
   */
  @Output()
  uploadCompleto: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  fazerUpload() {
    alert('Upload iniciado...')
    /**
     *  o metodo emit() serve para realizar a emissão do evento personalizado
     */
    this.uploadCompleto.emit()
  }
}

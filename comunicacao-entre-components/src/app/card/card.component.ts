import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  banner: string = 'https://images.unsplash.com/photo-1665969897068-1376abd5c7a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

  @Input()
  titulo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur at, distinctio alias saepe repudiandae quisquam voluptates.'

  @Input()
  username: string = 'João Pedro'

  @Input()
  userFoto: string = 'https://images.unsplash.com/photo-1610108702802-c26578e1adae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

  @Input()
  corBtn: string = 'black'

  constructor() { }

  ngOnInit(): void {
  }

}

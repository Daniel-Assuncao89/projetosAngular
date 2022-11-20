import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: Usuarios[] = [];

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe((res) => {
      this.usuario = res.map( e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Usuarios;
      })
    })
  }

  public removeUser(usuario: Usuarios){
    this.userService.deleteUser(usuario);
  }
}

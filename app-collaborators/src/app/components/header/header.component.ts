import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: AuthService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
  }

  public logout(): void{
    this.userService.logout().subscribe(response => {
      this.notification.showMessage("Deslogando, até logo.")
      this.router.navigate(["/login"])
    })
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private fireBaseAuth: AngularFireAuth, private router: Router, private notification: NotificationService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.fireBaseAuth.authState.pipe(
      map(user => {
        if (user) {
          return true
        } else {
          this.notification.message("Acesso para usuarios logados")
          this.router.navigate(["/login"])
          return false
        }
      })
    );
  }
  
}

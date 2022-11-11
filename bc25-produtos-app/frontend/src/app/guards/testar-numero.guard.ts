import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate { // utilizado para proteger a rota no momento da entrada. retorno do Guard é boolean: true = pode seguir ; false = não pode seguir

  constructor(
    private router : Router
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // recuperar o parametro que guarda o valor do id
     const idProduto = route.paramMap.get('idProduto')

    if( isNaN(Number(idProduto)) ){
       return this.router.navigateByUrl('**')
      
    } else {
      return true;
    }
   
  }
  
}

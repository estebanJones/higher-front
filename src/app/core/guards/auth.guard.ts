import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "src/app/features/account/services/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate{
  
    constructor(private _authService: AuthService, private _router: Router) {
    }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this._authService.verifierAuthentification()
        .pipe(
          map(user => {
            console.log("AuthGuard user -> apres verification -> ", user);
            return user.isConnected();
          }),
          tap(estConnecte => {
            if (!estConnecte) {
              console.log("AuthGuard -> retour verification -> non connecté");
              this._router.navigate(['/account']);
            }
          })
        );
    }
  
  }
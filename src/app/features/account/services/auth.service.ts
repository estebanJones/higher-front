import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/shared/http/http.service';
import { ConnectedUser } from '../dto/connectedUser.model';


/* Anomy user */
const USER_ANONYM = new ConnectedUser({});

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userConnectedSub: BehaviorSubject<ConnectedUser> = new BehaviorSubject<ConnectedUser>(USER_ANONYM);
    constructor(private httpService: HttpService){}

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser?: string;


  // Service permettant de vérifier si un collegue est authentifié.

  //  Une requête HTTP est déclenchée pour récupérer le collègue connecté s'il n'est pas en cache.

verifierAuthentification(): void {
      const connectedUser: ConnectedUser = this.userConnectedSub.getValue() as ConnectedUser;
      console.log('AuthService l.29 -> Controle utilisateur cache navigateur en cours');
      if (!connectedUser.email) {
        console.log('Aucun utilisateur en cache navigateur');
        console.log('Controle de la validité du cookie AUTH-TOKEN en cours');
        this.getMe().subscribe(ret => {
          if (!this.controleSiObjectVide(ret)){
            console.log('Le cookie AUTH-TOKEN en cache est valide côté serveur ' , ret);
            this.userConnectedSub.next(ret);
          } else {
            console.log('Le cookie AUTH-TOKEN en cache n\'est plus valide côté serveur ' , ret);
          }
        });
      } else {
        console.log('L\'utilisateur est dans le cache navigateur.');
        of(this.userConnectedSub.getValue());
      }
  }

  verifierAuthentificationGuard(): Observable<ConnectedUser> {
      const connectedUser: ConnectedUser = this.userConnectedSub.getValue() as ConnectedUser;
      return !!connectedUser.email ? this.getMe().pipe(
          map(userServer => {
            return new ConnectedUser(userServer);
          }),
          tap(user => {
            this.userConnectedSub.next(user);
          }),
          catchError(err => of(USER_ANONYM)))
          :
          of(this.userConnectedSub.getValue());
  }

  getMe(): Observable<ConnectedUser> {
    return this.httpService.get<ConnectedUser>('/user/me').pipe(
      map(userServer => new ConnectedUser(userServer)),
      tap(user => this.userConnectedSub.next(user)),
      catchError(err => of(USER_ANONYM)));
  }

  sendToUserSub(connectedUser: ConnectedUser): void {
    this.userConnectedSub.next(connectedUser);
  }

  get userConnectedObs(): Observable<ConnectedUser> {
    return this.userConnectedSub.asObservable();
  }

  controleSiObjectVide(objectToCheck: any): boolean {
    return Object.entries(objectToCheck).length === 0 ? true : false;
  }

  clear() {
    this.userConnectedSub.next(new ConnectedUser());
  }
}

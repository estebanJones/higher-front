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

  verifierAuthentification(): Observable<ConnectedUser> {
    const connectedUser: ConnectedUser = this.userConnectedSub.getValue() as ConnectedUser;
    return !!connectedUser.email ? this.getMe().pipe(
        map(userServer => new ConnectedUser(userServer)),
        tap(user => this.userConnectedSub.next(user)),
        catchError(err => of(USER_ANONYM)))
        :
        of(this.userConnectedSub.getValue());
  }

  getMe(): Observable<ConnectedUser> {
    return this.httpService.get<ConnectedUser>('/user/me');
  }

  sendToUserSub(connectedUser: ConnectedUser): void {
    this.userConnectedSub.next(connectedUser);
  }

  get collegueConnecteObs(): Observable<ConnectedUser> {
    return this.userConnectedSub.asObservable();
  }
}
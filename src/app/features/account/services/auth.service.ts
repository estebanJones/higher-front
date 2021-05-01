import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpService } from "src/app/shared/http/http.service";
import { ConnectedUser } from "../dto/connectedUser.model";


/* Anomy user */
const USER_ANONYM = new ConnectedUser({});

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userConnectedSub: BehaviorSubject<ConnectedUser> = new BehaviorSubject<ConnectedUser>(USER_ANONYM);
    constructor(private _httpService: HttpService){}

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser?: string;

      /**
   * Service permettant de vérifier si un collegue est authentifié.
   *
   * Une requête HTTP est déclenchée pour récupérer le collègue connecté s'il n'est pas en cache.
   *
   */
  verifierAuthentification(): Observable<ConnectedUser> {
    const connectedUser: ConnectedUser = this.userConnectedSub.getValue() as ConnectedUser;
    console.log("Verification Auth -> connectedUser -> ", connectedUser);
    if(!!connectedUser.email) {
      console.log("Verification Auth -> email existe")
     return this.getMe().pipe(
        map(userServer => new ConnectedUser(userServer)),
        tap(user => this.userConnectedSub.next(user)),
        catchError(err => {
          console.log("Verification Auth -> ERR ", err)
          return of(USER_ANONYM);
        })
    )
    } else {
      console.log("Verification Auth -> email existe")
      return of(this.userConnectedSub.getValue());
    }
  }

  getMe() :Observable<ConnectedUser> {
    return this._httpService.get<ConnectedUser>('/user/me');
  }

  sendToUserSub(connectedUser :ConnectedUser) {
    this.userConnectedSub.next(connectedUser);
  }
}
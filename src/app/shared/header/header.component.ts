import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectedUser } from '../../features/account/dto/connectedUser.model';
import { AuthService } from '../../features/account/services/auth.service';
import { LocalStorageService } from '../localStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  linkLogo = '../../../assets/higher_logo.png';
  utilisateurConnecteObs!: Observable<ConnectedUser>;
  isConnected = false;
  connectedUser!: ConnectedUser;
  pseudoUserConnected?: string;
  clickOnProfil = false;
  constructor(private authService: AuthService, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateurConnecteObs = this.authService.collegueConnecteObs;
    this.utilisateurConnecteObs.subscribe(ret => {
      // SI IL y a un utilisateur en cache
      if (ret.email !== undefined && ret.username !== undefined) {
        this.setConnectedUser(ret);
      } else {
        // Pas de cache
        this.controleUserStorage();
      }
    }, err => {
      console.log('une erreur est survenue');
    });

    console.log("valeur du click ", this.clickOnProfil)
  }

  private controleUserStorage(): void {
    const userLocal = this.localStorage.getItem<ConnectedUser>('utilisateur');
    if (userLocal !== null) {
      // Check dans le localStorage
     this.setConnectedUser(userLocal);
    } else {
      // LocalStorage vide
      localStorage.clear();
      this.router.navigate(['account']);
    }
  }

  private setConnectedUser(connectedUser: ConnectedUser): void {
    this.isConnected = true;
    this.connectedUser = connectedUser;
    console.log("connected username " , this.isConnected);
  }

  logout() {
    //TODO
  }
}

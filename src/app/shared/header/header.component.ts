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

  userObs!: Observable<ConnectedUser>;
  constructor(private authService: AuthService, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.localStorage.controleUserStorage();
    this.userObs =  this.localStorage.getConnectedUser();
    this.userObs.subscribe((utilisateur: ConnectedUser) => {
      this.connectedUser = utilisateur;
    });
  }

  logout(): void {
    this.isConnected = false;
    localStorage.clear();
    this.router.navigate(['account']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectedUser } from '../account/dto/connectedUser.model';
import { AuthService } from '../account/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  linkLogo: string = '../../../assets/higher_logo.png';
  utilisateurConnecte!: Observable<ConnectedUser>;
  isConnected: boolean = false;
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.utilisateurConnecte = this._authService.collegueConnecteObs;
    this.utilisateurConnecte.subscribe(ret => {
      if(ret.email != undefined) {
        this.isConnected = true;
        console.log("il y a email ", ret)
      } else {
        console.log("pas d' email")
      }
    }, err => console.log("error ", err) );
  }

}

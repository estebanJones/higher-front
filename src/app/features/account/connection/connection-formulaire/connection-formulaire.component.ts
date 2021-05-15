import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http/http.service';
import { LocalStorageService } from 'src/app/shared/localStorage.service';
import { ConnectedUser } from '../../dto/connectedUser.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-connection-formulaire',
  templateUrl: './connection-formulaire.component.html',
  styleUrls: ['./connection-formulaire.component.scss']
})
export class ConnectionFormulaireComponent implements OnInit {
  connexionFormulaire!: FormGroup;
  errorConnection?: boolean;
  constructor(private httpService: HttpService, private authService: AuthService, private router: Router,
              private localStorage: LocalStorageService) {

    this.connexionFormulaire = new FormGroup({
      username: new FormControl('', {
        validators: [
            Validators.required
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required
        ]
      })
    });
   }

  ngOnInit(): void {
  }

  connexion(): void {
    const email = this.connexionFormulaire.value.username;
    const password = this.connexionFormulaire.value.password;

    this.httpService.post<ConnectedUser>(
          '/login',
          new HttpParams().set('username', email).set('password', password),
          new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      )
      .subscribe(
        user => {
          this.authService.sendToUserSub(user);
          this.localStorage.setItem('utilisateur', user);
          this.router.navigate(['/teams']);
        },
        err => {console.log('erreur ', err); this.errorConnection = true;}
      );
  }
}

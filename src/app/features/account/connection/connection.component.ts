import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http/http.service';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ConnectedUser } from '../dto/connectedUser.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  connexionFormulaire!: FormGroup;
  errorConnection?: boolean;
  constructor(private _httpService: HttpService, private _authService: AuthService, private _router: Router) {
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
    })
   }

  ngOnInit(): void {
  }

  connexion(): void {
    const email = this.connexionFormulaire.value.username;
    const password = this.connexionFormulaire.value.password;

    this._httpService.post<ConnectedUser>(
          "/login",
          new HttpParams().set('username', email).set('password', password), 
          new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      )  
      .subscribe(
        user => {
          this._authService.sendToUserSub(user);
          this._router.navigate(['/teams'])
        },
        err => this.errorConnection = true
      );
    
  }   
}

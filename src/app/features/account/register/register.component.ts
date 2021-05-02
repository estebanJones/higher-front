import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http/http.service';
import { RegisterDtoRequest } from '../dto/registerDtoRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  static EMAIL_REGX = '^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*([-]{1})?@[a-z0-9]+([\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$';
  registerFormulaire!: FormGroup;
  registerDtoRequest: RegisterDtoRequest = new RegisterDtoRequest();

  constructor(private httpService: HttpService) {
    this.registerFormulaire = new FormGroup({
      email: new FormControl('', {
        validators: [
            Validators.required,
            Validators.pattern(RegisterComponent.EMAIL_REGX)
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

  register(): void {
    this.registerDtoRequest.email = this.registerFormulaire.value.email;
    this.registerDtoRequest.password = this.registerFormulaire.value.password;

    this.httpService.post("/user/inscription", this.registerDtoRequest, 
    new HttpHeaders({
      "Content-Type": "application/json"
    })).subscribe(
      ret => console.log("Le retour ? ", ret),
      err => console.log("Une erreur ?", err)
    );
  }
}

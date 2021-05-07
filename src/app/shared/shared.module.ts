import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AuthInterceptorService } from "../features/account/services/auth-interceptor.service";
import { EnvService } from "./env/env.service";
import { HttpService } from "./http/http.service";



@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      FormsModule,
      HttpClientModule,
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
        HttpService,
        EnvService,
        AuthInterceptorService
    ]
  })
  export class SharedModule { }

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthInterceptorService } from '../features/account/services/auth-interceptor.service';
import { EnvService } from './env/env.service';
import { HeaderComponent } from './header/header.component';
import { HttpService } from './http/http.service';
import { LocalStorageService } from './localStorage.service';
import { SharedRoutingModule } from './shared-routing.module';
import { DropdownDirective } from './directives/dropdown.directive';


@NgModule({
    declarations: [
      HeaderComponent,
      DropdownDirective
    ],
    imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      FormsModule,
      HttpClientModule,
      SharedRoutingModule
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
        HttpService,
        EnvService,
        AuthInterceptorService,
        LocalStorageService
    ],
    exports: [
      HeaderComponent
    ]
  })
  export class SharedModule { }

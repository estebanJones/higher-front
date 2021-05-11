import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthInterceptorService } from '../features/account/services/auth-interceptor.service';
import { DropdownDirective } from './directives/dropdown.directive';
import { EnvService } from './env/env.service';
import { HeaderComponent } from './header/header.component';
import { HttpService } from './http/http.service';
import { LocalStorageService } from './localStorage.service';
import { ModaleComponent } from './modale/modale.component';
import { SharedRoutingModule } from './shared-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
      HeaderComponent,
      DropdownDirective,
      ModaleComponent
    ],
    imports: [
      CommonModule,
      MDBBootstrapModule.forRoot(),
      FormsModule,
      HttpClientModule,
      SharedRoutingModule,
      NgbDropdownModule
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
      HeaderComponent,
      ModaleComponent
    ]
  })
  export class SharedModule { }

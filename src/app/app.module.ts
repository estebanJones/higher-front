import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './features/header/header.component';
import { CoreModule } from './core/core.module';
import { EmptyPageComponent } from './features/empty-page/empty-page.component';
import { AccountComponent } from './features/account/account.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './features/account/register/register.component';
import { ConnectionComponent } from './features/account/connection/connection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmptyPageComponent,
    AccountComponent,
    RegisterComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

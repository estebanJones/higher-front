import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountComponent } from './features/account/account.component';
import { ConnectionComponent } from './features/account/connection/connection.component';
import { RegisterComponent } from './features/account/register/register.component';
import { EmptyPageComponent } from './features/empty-page/empty-page.component';
import { SharedModule } from './shared/shared.module';
import { ConnectionFormulaireComponent } from './features/account/connection/connection-formulaire/connection-formulaire.component';
import { RegisterFormulaireComponent } from './features/account/register/register-formulaire/register-formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
    AccountComponent,
    RegisterComponent,
    ConnectionComponent,
    ConnectionFormulaireComponent,
    RegisterFormulaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    MatSelectCountryModule.forRoot('fr')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

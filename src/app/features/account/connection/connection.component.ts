import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http/http.service';
import { AuthService } from '../services/auth.service';
import { ConnectedUser } from '../dto/connectedUser.model';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/localStorage.service';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  ngOnInit(): void {

  }
}

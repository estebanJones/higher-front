import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './features/account/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'higher';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.verifierAuthentification();
  }
}

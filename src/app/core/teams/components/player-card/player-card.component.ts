import { Component, Input, OnInit } from '@angular/core';
import { ConnectedUser } from '../../../../features/account/dto/connectedUser.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  photoPlayer: string = 'https://g2esports.com/wp-content/uploads/Niko-2021.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

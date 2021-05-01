import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer-card',
  templateUrl: './gamer-card.component.html',
  styleUrls: ['./gamer-card.component.scss']
})
export class GamerCardComponent implements OnInit {
  photoGame: string = 'https://g2esports.com/wp-content/uploads/2020-03-03-Teams_Games-CSGO-WithoutTeam-1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

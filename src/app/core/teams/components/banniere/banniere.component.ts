import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.scss']
})
export class BanniereComponent implements OnInit {
  banniereLink: string = '../../../../../assets/banniere_teams.png';
  
  constructor() { }

  ngOnInit(): void {
  }

}

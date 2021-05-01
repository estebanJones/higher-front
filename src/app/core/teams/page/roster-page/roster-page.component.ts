import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss']
})
export class RosterPageComponent implements OnInit {
  logoGameLink: string = '../../../../../assets/counter-strike-global-offensive-2.svg';
  constructor() { }

  ngOnInit(): void {
  }

}

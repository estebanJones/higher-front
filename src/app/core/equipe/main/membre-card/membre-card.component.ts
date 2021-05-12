import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-membre-card',
  templateUrl: './membre-card.component.html',
  styleUrls: ['./membre-card.component.scss']
})
export class MembreCardComponent implements OnInit {
@Input() membre: Membre;
  constructor() { }

  ngOnInit(): void {
  }

}

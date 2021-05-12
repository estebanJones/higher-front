import { Component, OnInit, Input } from '@angular/core';
import { Membre } from '../../core/model/membre';

@Component({
  selector: 'app-membre-card',
  templateUrl: './membre-card.component.html',
  styleUrls: ['./membre-card.component.scss']
})
export class MembreCardComponent implements OnInit {
  @Input() membre!: Membre;
  constructor() { }

  ngOnInit(): void {
  }

}

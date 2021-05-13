import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../../core/model/equipe';
import { Membre } from '../../core/model/membre';

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.scss'],
})
export class EquipeDetailsComponent implements OnInit {
  @Input() equipeSelectionnee!: Equipe;
  @Input() membres!: Membre[];
  isCapitaine!:boolean;
  constructor() {}

  ngOnInit(): void {
    this.isCapitaine = true;
  }

  onInviteMembres(){

  }
}

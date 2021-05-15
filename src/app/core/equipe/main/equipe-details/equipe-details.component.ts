import { Component, Input, OnInit } from '@angular/core';
import { ConnectedUser } from 'src/app/features/account/dto/connectedUser.model';
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
  @Input() utilisateur!: ConnectedUser;
  @Input() isCapitaine!: boolean;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.isCapitaine);
  }


  onInviteMembres(){

  }


}

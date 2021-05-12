import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../../core/model/equipe';
import { EquipeService } from '../../core/services/equipe.service';
import { ConnectedUser } from '../../../../features/account/dto/connectedUser.model';


@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.scss'],
})
export class EquipeListComponent implements OnInit {
  @Output() selectEquipe: EventEmitter<string> = new EventEmitter();
  @Input() utilisateur!: ConnectedUser;
  equipesUtilisateur!: Equipe[];


  constructor(private equipeService: EquipeService) {}

  ngOnInit(): void {
    if (this.utilisateur) {
      this.equipeService
        .getEquipesParJoueur(this.utilisateur.id)
        .subscribe((equipes) => {
          this.equipesUtilisateur = equipes;
        });
      console.log('equipes utilisateur : ', this.equipesUtilisateur);
    }
  }
  onSelectEquipe(nomEquipe: any): void{
    this.selectEquipe.emit(nomEquipe);
  }
}

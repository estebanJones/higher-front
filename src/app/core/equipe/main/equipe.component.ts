import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectedUser } from 'src/app/features/account/dto/connectedUser.model';
import { LocalStorageService } from '../../../shared/localStorage.service';
import { ModaleComponent } from '../../../shared/modale/modale.component';
import { Equipe } from '../core/model/equipe';
import { EquipeService } from '../core/services/equipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @ViewChild(ModaleComponent) modale!: ModaleComponent;
  userObs!: Observable<ConnectedUser>;
  connectedUser!: ConnectedUser;
  equipesUtilisateur!: Equipe[];
  createEquipeForm!: FormGroup;
  nomEquipe!: string;
  constructor(private localStorage: LocalStorageService,
              private equipeService: EquipeService) {
               }

  ngOnInit(): void {
    this.localStorage.controleUserStorage();
    this.userObs =  this.localStorage.getConnectedUser();
    this.userObs.subscribe((utilisateur: ConnectedUser) => {
      this.connectedUser = utilisateur;
      console.log('user dans equipe' , this.connectedUser);
    });
    if (this.connectedUser){
      this.equipeService.getEquipesParJoueur(this.connectedUser.id).subscribe(equipesUtilisateurObs => {
        this.equipesUtilisateur = equipesUtilisateurObs;
        console.log('equipe dans sub' , this.equipesUtilisateur);
      });
    }
  }
  onCreate(): void {
    // TODO Création d'équipe -- déterminer les paramètres nécessaires à la création
    // this.equipeService.creerEquipe();
  }
}

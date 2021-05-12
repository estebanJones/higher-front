import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectedUser } from 'src/app/features/account/dto/connectedUser.model';
import { LocalStorageService } from '../../../shared/localStorage.service';
import { ModaleComponent } from '../../../shared/modale/modale.component';
import { Equipe } from '../core/model/equipe';
import { EquipeService } from '../core/services/equipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EquipeACreer } from '../core/model/equipeACreer';

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
  equipeACreer: EquipeACreer = new EquipeACreer();
  equipeSelectionnee!: Equipe;

  constructor(private localStorage: LocalStorageService,
              private equipeService: EquipeService) {
              //   this.createEquipeForm = new FormGroup({
              //     username: new FormControl('', {
              //       validators: [
              //           Validators.required
              //       ]
              //     })
              //  });
            }

  ngOnInit(): void {
    this.localStorage.controleUserStorage();
    this.userObs =  this.localStorage.getConnectedUser();
    this.userObs.subscribe((utilisateur: ConnectedUser) => {
      this.connectedUser = utilisateur;
    });
    if (this.connectedUser){
      this.equipeService.getEquipesParJoueur(this.connectedUser.id).subscribe(equipesUtilisateurObs => {
        this.equipesUtilisateur = equipesUtilisateurObs;
      });
    }
  }

  onCreate(): void {
    // TODO Création d'équipe -- déterminer les paramètres nécessaires à la création
    this.equipeACreer.createurId = this.connectedUser.id;
    this.equipeService.creerEquipe(this.equipeACreer);
  }

  onSelectEquipe(nomEquipe: string): void {
    this.equipesUtilisateur.forEach(equipe => {
      if (equipe.nom === nomEquipe){
        this.equipeSelectionnee =  equipe;
      }
    });
  }



}

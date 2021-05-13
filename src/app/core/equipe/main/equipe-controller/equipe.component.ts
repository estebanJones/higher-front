import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ConnectedUser } from 'src/app/features/account/dto/connectedUser.model';
import { LocalStorageService } from '../../../../shared/localStorage.service';
import { ModaleComponent } from '../../../../shared/modale/modale.component';
import { Equipe } from '../../core/model/equipe';
import { EquipeACreer } from '../../core/model/equipeACreer';
import { Membre } from '../../core/model/membre';
import { EquipeService } from '../../core/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss'],
})
export class EquipeComponent implements OnInit {
  @ViewChild(ModaleComponent) modale!: ModaleComponent;
  userObs!: Observable<ConnectedUser>;
  connectedUser!: ConnectedUser;
  equipesUtilisateur!: Equipe[];
  equipesUtilisateurObs!: Observable<Equipe[]>;
  createEquipeForm!: FormGroup;
  nomEquipe!: string;
  equipeACreer: EquipeACreer = new EquipeACreer();
  equipeSelectionnee!: Equipe;
  membres!: Membre[];
  isCapitaine!: boolean;
  constructor(
    private localStorage: LocalStorageService,
    private equipeService: EquipeService
  ) {}

  ngOnInit(): void {
    this.localStorage.controleUserStorage();
    this.userObs = this.localStorage.getConnectedUser();
    this.userObs.subscribe((utilisateur: ConnectedUser) => {
      this.connectedUser = utilisateur;
    });
    this.getEquipesParJoueur();
  }

  getEquipesParJoueur(): void {
    if (this.connectedUser) {
      this.equipeService.getEquipesParJoueur(this.connectedUser.id).subscribe(equipes => {
        this.equipesUtilisateur = equipes;
      });
    }
  }

  onCreate(): void {
    this.equipeACreer.createurId = this.connectedUser.id;
    this.equipeService.creerEquipe(this.equipeACreer);
    this.modale.hide();
    }

  getJoueursParEquipe(idEquipe: number): void {
    this.equipeService.getJoueursParEquipe(idEquipe).subscribe((membres) => {
      this.membres = membres;
    });
  }

  onSelectEquipe(nomEquipe: string): void {
    this.equipesUtilisateur.forEach((equipe) => {
      if (equipe.nom === nomEquipe) {
        this.equipeSelectionnee = equipe;
        this.getJoueursParEquipe(equipe.id);
      }
    });
  }

  onInviteMembres() {}
}

import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { cpuUsage } from 'node:process';
import { Observable, of, Subject } from 'rxjs';
import { ConnectedUser } from 'src/app/features/account/dto/connectedUser.model';
import { AuthService } from 'src/app/features/account/services/auth.service';
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
  connectedUser!: ConnectedUser;
  equipesUtilisateur!: Equipe[];
  equipesUtilisateurSubject = new Subject<Equipe[]>();
  nomEquipe!: string;
  equipeACreer: EquipeACreer = new EquipeACreer();
  equipeSelectionnee!: Equipe;
  userCapitaine!: boolean;
  // PROPS NON UTILISEES
  membres!: Membre[];
  // PROPS NON UTILISEES

  constructor(private authService: AuthService, private equipeService: EquipeService) {

  }

  ngOnInit(): void {
    this.authService.userConnectedObs.subscribe(userDB => {
      this.remplirTableauEquipesJoueur(userDB.id);
      this.connectedUser = userDB;
    });
  }

  creerEquipe(): void {
    if (this.connectedUser.id !== undefined) {
      this.equipeACreer.createurId = this.connectedUser.id;
      this.equipeService.creerEquipe(this.equipeACreer).subscribe(ret => {
        this.remplirTableauEquipesJoueur(this.connectedUser.id);
        this.modale.hide();
      });
    }
  }

  remplirTableauEquipesJoueur(id: number): void {
    this.equipeService.getEquipesParJoueur(id).subscribe(equipes => {
      this.equipesUtilisateurSubject.next(equipes);
      this.equipesUtilisateur = equipes;
    });
  }

  getJoueursParEquipe(idEquipe: number): void {
    this.equipeService.getJoueursParEquipe(idEquipe).subscribe((membres) => {
      this.membres = membres;
    });
  }

  onSelectEquipe(nomEquipe: string): void {
    this.equipesUtilisateur.forEach(equipe => {
      if (equipe.nom === nomEquipe) {
        this.equipeSelectionnee = equipe;
        this.getJoueursParEquipe(equipe.id);
        this.userCapitaine = this.isCapitaine(equipe);
      }
    });
  }

  isCapitaine(equipeSelectionnee: Equipe): boolean {
    return equipeSelectionnee.idCapitaine === this.connectedUser.id ? true : false;
  }

  onInviteMembres() {}
}

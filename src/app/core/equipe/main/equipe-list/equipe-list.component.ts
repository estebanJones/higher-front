import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../../core/model/equipe';
import { EquipeService } from '../../core/services/equipe.service';
import { ConnectedUser } from '../../../../features/account/dto/connectedUser.model';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/features/account/services/auth.service';


@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.scss'],
})
export class EquipeListComponent implements OnInit {
  @Output() selectEquipe: EventEmitter<string> = new EventEmitter();
  @Input() utilisateur!: ConnectedUser;
  @Input() equipesUtilisateurSubject!: Subject<Equipe[]>;
  equipesUtilisateur: Equipe[] = [];
  connectedUser!: ConnectedUser;
  userObs!: Observable<ConnectedUser>;
  private listeEquipesSubject = new Subject<Equipe[]>();

  constructor(private equipeService: EquipeService, private authService: AuthService) {}

  ngOnInit(): void {
    this.equipesUtilisateurSubject.subscribe(equipes => this.equipesUtilisateur = equipes);
  }

  onSelectEquipe(nomEquipe: any): void {
    this.selectEquipe.emit(nomEquipe);
  }
}

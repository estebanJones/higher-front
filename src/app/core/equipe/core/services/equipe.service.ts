import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from '../../../../shared/http/http.service';
import { Equipe } from '../model/equipe';
import { EquipeACreer } from '../model/equipeACreer';
import { Membre } from '../model/membre';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpService: HttpService) {}
  path = '/equipe';

  public equipesParJoueur$: BehaviorSubject<any> = new BehaviorSubject({});
  getEquipesParJoueur(idUtilisateur: number): Observable<Equipe[]> {
    return this.httpService.get<Equipe[]>(this.path + '/liste/' + idUtilisateur);
  }
  getJoueursParEquipe(idEquipe: number): Observable<Membre[]>{
    return this.httpService.get<Membre[]>(this.path + '/' + idEquipe +  '/membres/');
  }

    creerEquipe(equipe: EquipeACreer): void {
      this.httpService.post(this.path + '/create', equipe,
      new HttpHeaders({
        'Content-Type': 'application/json'
      })).subscribe(
        ret => {
          console.log('Le retour ? ', ret)
        },
        err => {
          console.log('Une erreur ?', err)
        }
      );
    }

    inviterMembres() {
      //TODO invitation d'un nouveau membre à une équipe
    }


}

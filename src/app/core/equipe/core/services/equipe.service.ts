import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http/http.service';
import { Equipe } from '../model/equipe';
import { EquipeACreer } from '../model/equipeACreer';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpService: HttpService) {}
  path = '/equipe';
  getEquipesParJoueur(idUtilisateur: number): Observable<Equipe[]> {
    return this.httpService.get<Equipe[]>(this.path + '/liste/' + idUtilisateur);
  }

  getJoueursParEquipe(idEquipe: number): Observable<Membre[]>{

  }
    creerEquipe(equipe: EquipeACreer): void {
      this.httpService.post(this.path + '/create', equipe,
      new HttpHeaders({
        'Content-Type': 'application/json'
      })).subscribe(
        ret => console.log('Le retour ? ', ret),
        err => console.log('Une erreur ?', err)
      );
    }


}

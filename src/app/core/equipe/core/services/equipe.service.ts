import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http/http.service';
import { Equipe } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpService: HttpService) {}
  path = '/equipe';
  getEquipesParJoueur(idUtilisateur: number): Observable<Equipe[]> {
    return this.httpService.get<Equipe[]>(this.path + '/liste/' + idUtilisateur);
  }

    creerEquipe(equipe: Equipe): void {
      this.httpService.post(this.path + '/create', equipe,
      new HttpHeaders({
        'Content-Type': 'application/json'
      })).subscribe(
        ret => console.log('Le retour ? ', ret),
        err => console.log('Une erreur ?', err)
      );
    }


}

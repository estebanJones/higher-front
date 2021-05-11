import { Injectable } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { ConnectedUser } from '../features/account/dto/connectedUser.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
  connectedUser!: ConnectedUser;

  setItem(key: string, valueObject: any): void {
        const objectAsString = JSON.stringify(valueObject);
        localStorage.setItem(key, objectAsString);
    }

    getItem<T>(key: string): T | null{
        const item = localStorage.getItem(key);
        if (!!item) {
            return JSON.parse(item) as T;
        }
        return null;
    }

    public controleUserStorage(): void {
      const userLocal = this.getItem<ConnectedUser>('utilisateur');
      if (userLocal !== null) {
        // Check dans le localStorage
       this.setConnectedUser(userLocal);
      } else {
        // LocalStorage vide
        localStorage.clear();
      }
    }

    private setConnectedUser(connectedUser: ConnectedUser): void {
      this.connectedUser = connectedUser ;
    }
    public getConnectedUser(): Observable<ConnectedUser>{
        return of(this.connectedUser);
      }

    }




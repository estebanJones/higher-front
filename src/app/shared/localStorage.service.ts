import { Injectable } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

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
}

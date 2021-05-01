import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EnvService {

    constructor() {

    }

    getRacineUrl(): string {
        return environment.routes.racine;
    }
}
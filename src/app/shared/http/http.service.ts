import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from "rxjs";
import { EnvService } from "../env/env.service";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private httpClient: HttpClient, private envService: EnvService) {

    }

    public post<U>(route: string, params: any, config: HttpHeaders): Observable<U> {
        return this.httpClient.post<U>(this.envService.getRacineUrl() + route, params, {
            headers: config
        });
    }

    public get<U>(route: string): Observable<U> {
        return this.httpClient.get<U>(this.envService.getRacineUrl() + route);
    }


}
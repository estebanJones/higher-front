import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpService } from "../shared/http/http.service";
import { TeamsModule } from "./teams/teams.module";

@NgModule({
    declarations: [
    ],
    imports:[
        CommonModule,
        TeamsModule
    ],
    providers: [
    ]
})
export class CoreModule { }
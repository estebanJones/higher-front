import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TeamsModule } from "./teams/teams.module";
import { EquipeModule } from "./equipe/equipe.module";
@NgModule({
    declarations: [],
    imports:[
        CommonModule,
        TeamsModule,
        EquipeModule
    ],
    providers: [
    ]
})
export class CoreModule { }
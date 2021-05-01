import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BanniereComponent } from "./components/banniere/banniere.component";
import { TeamsComponent } from "./page/teams.component";
import { TeamsRoutingModule } from "./teams-routing.module";
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { GamerCardComponent } from './components/gamer-card/gamer-card.component';
import { RosterPageComponent } from './page/roster-page/roster-page.component';
import { GamePageComponent } from "./page/game-page/game-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        TeamsComponent,
        BanniereComponent,
        PlayerCardComponent,
        GamerCardComponent,
        GamePageComponent,
        RosterPageComponent
    ],
    imports:[
        CommonModule,
        TeamsRoutingModule,
        RouterModule
    ],
    providers: [

    ],
    exports: [
        CommonModule
    ]
})
export class TeamsModule { }
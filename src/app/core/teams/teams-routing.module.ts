import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./page/game-page/game-page.component";
import { PlayerCardComponent } from "./components/player-card/player-card.component";
import { TeamsComponent } from "./page/teams.component";
import { RosterPageComponent } from "./page/roster-page/roster-page.component";
import { AuthGuard } from "../guards/auth.guard";


const routes: Routes = [
    {
        path: '',
        component: GamePageComponent,
        canActivate: [AuthGuard]
    },
    {
        path : 'csgo',
        component: RosterPageComponent
    },
    {
        path : '**',
        redirectTo : ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamsRoutingModule {}
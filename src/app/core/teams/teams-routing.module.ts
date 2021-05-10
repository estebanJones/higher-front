import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./page/game-page/game-page.component";
import { RosterPageComponent } from "./page/roster-page/roster-page.component";
import { AuthGuard } from "../guards/auth.guard";
import { EquipeComponent } from "../equipe/main/equipe.component";



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
        path : 'equipe',
        component: EquipeComponent
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
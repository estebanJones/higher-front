import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EquipeComponent } from "./main/equipe-controller/equipe.component";


const routes: Routes = [
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
export class EquipeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../features/account/account.component';
import { EmptyPageComponent } from '../features/empty-page/empty-page.component';


export const routes: Routes = [
    {
        path: 'teams',
        loadChildren: () => import('../core/teams/teams.module').then(module => module.TeamsModule),
    },
    {
        path: 'account',
        component: AccountComponent,
    },
    {
        path: '**',
        component: EmptyPageComponent,
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule {}
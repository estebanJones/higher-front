import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './features/account/account.component';
import { EmptyPageComponent } from './features/empty-page/empty-page.component';


export const routes: Routes = [
    {
        path: 'teams',
        loadChildren: () => import('./core/teams/teams.module').then(module => module.TeamsModule),
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
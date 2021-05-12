import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EquipeModule } from './equipe/equipe.module';
import { TeamsModule } from './teams/teams.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        TeamsModule,
        EquipeModule
    ],
    providers: [
    ]
})
export class CoreModule { }

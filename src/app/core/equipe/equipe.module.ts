import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './main/equipe.component';


@NgModule({
    declarations: [
        EquipeComponent,
        EquipeListComponent
    ],
    imports: [
        CommonModule,
        EquipeRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule
    ],
    providers: [

    ],
    exports: [
        CommonModule
    ]
})
export class EquipeModule { }

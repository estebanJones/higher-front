import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { EquipeRoutingModule } from "./equipe-routing.module";
import { EquipeComponent } from "./main/equipe.component";


@NgModule({
    declarations: [
        EquipeComponent
    ],
    imports:[
        CommonModule,
        EquipeRoutingModule
    ],
    providers: [

    ],
    exports: [
        CommonModule
    ]
})
export class EquipeModule { }

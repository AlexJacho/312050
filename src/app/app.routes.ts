import { Routes } from '@angular/router';
import { HomeComponent } from './Domains/info/pages/home/home.component';
import { BoardsComponent } from './Domains/info/pages/boards/boards.component';
import { DespreProiectComponent } from './Domains/info/pages/despre-proiect/despre-proiect.component';
import { NoutatiComponent } from './Domains/info/pages/noutati/noutati.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title:"Forța comunității"
    },
    {
        path: "boards",
        component: BoardsComponent
    },
    {
        path: "despre",
        component: DespreProiectComponent
    },
    {
        path: "noutati",
        component: NoutatiComponent
    },

];

import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {MessagesComponent} from './components/messages/messages.component'

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'message', component: MessagesComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: ''}

];

export const app_routing = RouterModule.forRoot(app_routes);
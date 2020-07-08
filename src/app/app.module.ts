import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';


import {TaskService} from './services/task.service';
import { FilterPipe } from './pipes/filter.pipe';
import { MessagesComponent } from './components/messages/messages.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SettingsComponent } from './components/settings/settings.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes=[
  {path: 'home', redirectTo:'/home', pathMatch: 'full'},
  {path: 'messages', component: MessagesComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent,
    FilterPipe,
    MessagesComponent,
    WishlistComponent,
    SettingsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

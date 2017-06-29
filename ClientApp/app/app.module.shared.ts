import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LifestylesComponent } from './components/lifestyles/lifestyles.component';
import { LifestyleService } from './components/lifestyles/lifestyle.service';
import { LifestyleUpdate } from './components/lifestyles/lifestlyle-update';
// Imports for loading & configuring the in-memory web api
//import { InMemoryDataService } from './components/lifestyles/in-memory-data.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        LifestylesComponent,
        LifestyleUpdate
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'lifestyleUpdate/:name', component: LifestyleUpdate },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'lifestyles', component: LifestylesComponent },
            { path: '*', redirectTo: 'lifestyles' }
            
        ])
    ],
    providers: [LifestyleService]
};

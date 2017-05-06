import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {Router} from './app.router';
import {HeroService} from './shared/services/hero.service';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Router,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

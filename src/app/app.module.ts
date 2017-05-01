import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HeroService} from './hero.service';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.components';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
      AppComponent,
      HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

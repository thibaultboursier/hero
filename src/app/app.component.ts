<<<<<<< HEAD
import {Component} from '@angular/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service';
=======
﻿import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
>>>>>>> 84ad6d92ddc01abaa9a02fa4bc3b4988d526f772

@Component({
  selector: 'my-app',
  providers: [
    HeroService
  ],
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
<<<<<<< HEAD
  `,
=======
`,
  providers: [
      HeroService
  ],
>>>>>>> 84ad6d92ddc01abaa9a02fa4bc3b4988d526f772
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Tour of Heroes';
=======
  title: string = 'Tour of Heroes';
>>>>>>> 84ad6d92ddc01abaa9a02fa4bc3b4988d526f772
  selectedHero: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
      
  }

  getHeroes() {
      this.heroService.getHeroesWithObservable()
          .subscribe(
            (hero: Hero) => this.heroes.push(hero),
            (errors: any) => { },
            () => console.log('complete')
          );
  }

  ngOnInit() {
      this.getHeroes();
  }

  constructor(private heroService:HeroService){
  }

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes():Hero[]{
    this.heroes = this.heroService.getHeroes();
  }

  /**
   * On select event
   *
   * @param hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

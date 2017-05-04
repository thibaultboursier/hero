/**
 * Created by Thibault on 02/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import {HeroService} from '../shared/services/hero.service';
import {Hero} from '../shared/types/hero';

@Component({
  selector: 'app-dashboard',
  styleUrls: [],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroesWithObservable()
      .subscribe((hero: Hero) => this.heroes.push(hero));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

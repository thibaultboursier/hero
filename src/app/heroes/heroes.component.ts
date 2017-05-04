/**
 * Created by Thibault on 02/05/2017.
 */
import {Component} from '@angular/core';
import {Hero} from '../shared/types/hero';
import {HeroService} from '../shared/services/hero.service';

@Component({
  selector: 'app-heroes',
  providers: [
    HeroService
  ],
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {
  selectedHero: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  getHeroes() {
    this.heroService.getHeroesWithObservable()
      .subscribe(
        (hero: Hero) => this.heroes.push(hero),
        (error: Error) => {
          console.error(error)
        },
        () => console.log('complete')
      );
  }

  ngOnInit() {
    this.getHeroes();
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

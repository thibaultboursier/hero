/**
 * Created by Thibault on 02/05/2017.
 */
import {Component} from '@angular/core';
import {Hero} from '../shared/types/hero';
import {HeroService} from '../shared/services/hero.service';
import {Router} from '@angular/router';

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

  constructor(private heroService: HeroService,
              private router: Router) {
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

  goToHero(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
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

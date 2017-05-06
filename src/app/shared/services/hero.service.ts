import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Hero} from '../types/hero';
import {HEROES} from '../mocks/mock-heroes';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  private heroesUrl: string = 'api/heroes';

  constructor(private http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: Error): Promise<any> {
    console.error('an error occured', error);

    return Promise.reject(error);
  }

  getHeroesWithObservable() {
    return this.http.get(this.heroesUrl)
      .map(res => res.json())
      .map(({data}) => data);
  }

  getHeroesSlowly(): any {
    return new Promise(resolve => setTimeout(resolve.bind(null, HEROES), 3000));
  }

  getHero(id: number) {
    return this.getHeroesWithObservable()
      .find((hero: Hero) => hero.id === id);
  }
}

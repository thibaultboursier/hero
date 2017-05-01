import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): any {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): any {
        return new Promise(resolve => setTimeout(resolve.bind(null, HEROES), 3000));
    }
}

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    getHeroes(): any {
        return Promise.resolve(HEROES);
    }

    getHeroesWithObservable():Observable {
        return Observable.create((observer: any) => {
            HEROES.forEach(hero => observer.next(hero));

            observer.complete();
        });
    }

    getHeroesSlowly(): any {
        return new Promise(resolve => setTimeout(resolve.bind(null, HEROES), 3000));
    }
}

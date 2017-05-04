/**
 * Created by Thibault on 30/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Hero} from "../shared/types/hero";
import {HeroService} from '../shared/services/hero.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  styleUrls: [],
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero: Hero) => {
        console.log(hero);
        this.hero = hero
      });
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  goBack(): void {
    this.location.back();
  }
}

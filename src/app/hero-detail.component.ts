/**
 * Created by Thibault on 30/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Hero} from "./hero";
import {HeroService} from './hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  styleUrls: [''],
  template: ` 
   <a href="javascript:void" (click)="goBack()">Go back</a>
   <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div>
          <label>id: </label>{{hero.id}}
        </div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
  </div>`
})
export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private heroService:HeroService,
    private location:Location
  ) {
  }

  ngOnInit():void{
    this.route.params
      .switchMap((params:Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero:Hero) => {console.log(hero);this.hero = hero});
  }

  ngAfterViewInit(){
    console.log('after view init');
  }

  goBack():void{
    this.location.back();
  }
}

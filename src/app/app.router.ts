/**
 * Created by Thibault on 01/05/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';

const ROUTES: Routes = [{
  path: 'heroes',
  component: HeroesComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path:'detail/:id',
  component: HeroDetailComponent
}];

export const Router = RouterModule.forRoot(ROUTES);

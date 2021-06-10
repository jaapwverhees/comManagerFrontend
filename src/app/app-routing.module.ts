import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {PickSportComponent} from './components/pick-sport/pick-sport.component';
import {CreateTimeTrailComponent} from './components/create-competition/create-time-trail/create-time-trail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pick-sport', component: PickSportComponent },
  { path: 'create-timetrail', component: CreateTimeTrailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

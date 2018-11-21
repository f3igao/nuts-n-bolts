import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../shared/home/home.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { TodoComponent } from '../feature/todo/todo.component';
import { SignupComponent } from '../feature/signup/signup.component';
import { RegistrationComponent } from './../feature/registration/registration.component';
import { ArmyComponent } from '../feature/army/army.component';


const routes: Routes = [
  // root routes
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  // accessibility test routes
  { path: 'registration/:status', component: RegistrationComponent },
  { path: 'registration', redirectTo: 'registration/good', pathMatch: 'full' },
  { path: 'army/:status', component: ArmyComponent, pathMatch: 'full' },
  { path: 'army', redirectTo: 'army/good', pathMatch: 'full' },
  // page not found
  { path: '404', component: PageNotFoundComponent, },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

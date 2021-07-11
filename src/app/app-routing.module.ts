import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './shared/about/about.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './feature/login/login.component';
import { RegistrationComponent } from '././feature/registration/registration.component';
import { ArmyComponent } from './feature/army/army.component';
import { TodoComponent } from './feature/todo/todo.component';

const routes: Routes = [
  // root routes
  { path: '', component: AboutComponent },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  // accessibility test routes
  { path: 'login/:status', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', redirectTo: 'login/good', pathMatch: 'full' },
  { path: 'register/:status', component: RegistrationComponent },
  { path: 'register', redirectTo: 'register/good', pathMatch: 'full' },
  {
    path: 'army/:status',
    component: ArmyComponent,
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
  },
  { path: 'army', redirectTo: 'army/good', pathMatch: 'full' },
  { path: 'todo/:status', component: TodoComponent, pathMatch: 'full' },
  { path: 'todo', redirectTo: 'todo/good', pathMatch: 'full' },
  // page not found
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

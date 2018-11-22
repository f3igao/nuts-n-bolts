import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArmyComponent } from './army/army.component';

@NgModule({
  declarations: [
    TodoComponent,
    RegistrationComponent,
    ArmyComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [TodoComponent]
})
export class FeatureModule { }

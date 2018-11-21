import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArmyComponent } from './army/army.component';

@NgModule({
  declarations: [TodoComponent, SignupComponent, RegistrationComponent, ArmyComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [TodoComponent]
})
export class FeatureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [TodoComponent, SignupComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  exports: [TodoComponent]
})
export class FeatureModule { }

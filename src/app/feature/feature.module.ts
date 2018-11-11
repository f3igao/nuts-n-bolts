import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoComponent]
})
export class FeatureModule { }

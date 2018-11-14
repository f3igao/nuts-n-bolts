import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatListModule,
  ],
  exports: [TodoComponent]
})
export class FeatureModule { }

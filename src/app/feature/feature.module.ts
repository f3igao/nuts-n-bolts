import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [TodoComponent]
})
export class FeatureModule { }

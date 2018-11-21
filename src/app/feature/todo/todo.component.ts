import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/http/api.service';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: ITodo[];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getToDos().subscribe(data => {
      this.todos = data.slice(0, 15);
    });
  }

  // reorder(event: CdkDragDrop<ITodo>) {
  //   moveItemInArray(
  //     this.todos,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }
}

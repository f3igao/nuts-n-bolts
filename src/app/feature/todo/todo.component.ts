import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/http/api.service';

import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<ITodo[]>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.todos = this.apiService.getToDos();
  }

}

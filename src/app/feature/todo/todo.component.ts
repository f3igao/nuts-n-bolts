import { Component } from '@angular/core';

import { ITodo } from 'src/app/models/feature.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MOCK_TODOS } from 'src/assets/mock-data/todos.mock';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todos: ITodo[] = MOCK_TODOS;
  navigationSubscription: any;
  accessibleExample = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      // subscribe to route change; re-initalise the component on a NavigationEnd event
      if (event instanceof NavigationEnd) {
        this.accessibleExample =
          route.snapshot.params.status === 'good' ? true : false;
      }
    });
  }

  markDone(i: number, event?: Event, preventDefault?: boolean): void {
    if (event && preventDefault) event.preventDefault();
    this.todos[i].completed = !this.todos[i].completed;
  }

  toggleAccessibility(): void {
    this.accessibleExample = !this.accessibleExample;
    const status = this.accessibleExample === true ? '/good' : '/bad';
    this.router.navigate([`/todo${status}`]);
  }
}

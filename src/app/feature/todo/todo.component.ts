import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/http/api.service';

import { ITodo } from 'src/app/models/feature.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: ITodo[];
  navigationSubscription: any;
  accessibleExample: boolean;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.navigationSubscription = this.router.events.subscribe((event: any) => {
        // subscribe to route change; re-initalise the component on a NavigationEnd event
        if (event instanceof NavigationEnd) {
          this.accessibleExample = route.snapshot.params.status === 'good' ? true : false;
        }
      });
    }

  ngOnInit(): void {
    this.apiService.getToDos().subscribe(data => {
      this.todos = data.slice(0, 15);
    });
  }

  markDone(i: number, event = null, preventDefault = false): void{
    if (preventDefault) {
      event.preventDefault();
    }
    this.todos[i].completed = !this.todos[i].completed;
  }

  toggleAccessibility(): void {
    this.accessibleExample = !this.accessibleExample;
    const status = this.accessibleExample === true ? '/good' : '/bad';
    this.router.navigate([`/todo${status}`]);
  }
}

import { ApiService } from './../http/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private apiServive: ApiService
  ) { }

  getToDos(): void {
    this.apiServive.getToDos().subscribe(data => {
      console.log(data[10]);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getToDos(): Observable<any> {
    const url = environment.useLocalJson ? '../../../../assets/mock-data/todos.json' : 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}

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

  // getCompanyListing<T>(expertId: number): Observable<T> {
  //   if (environment.useLocalJson) {
  //     const url = `${environment.JSON_BASE_HREF}${
  //       this.appConfig.ENDPOINTS.LOCAL.CompanyList
  //     }?expert=${expertId}`;
  //     return this.httpService.getJson(url);
  //   } else {
  //     const endpoint = this.appConfig.ENDPOINTS.REMOTE.CompanyList.replace(
  //       '{id}',
  //       `${expertId}`,
  //     );
  //     const url = `${environment.API_BASE_HREF}${endpoint}`;
  //     return this.httpService.get(url);
  //   }
  // }

  getToDos(): Observable<any> {
    const url = environment.useLocalJson ? '../../../../assets/mock-data/todos.json' : 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}

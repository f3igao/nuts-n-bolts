import { TodoService } from './../../core/services/todo/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getToDos();
  }


  // getCompanies(expert: IExpert): void {
  //   this.apiService.getCompanyListing<IExpertCompany>(expert.id)
  //     .subscribe((data: IExpertCompany) => {
  //       this.updateCompanies(data.companies);
  //       this.updateVariables(data.variables);
  //       this.getGlobalBlackout(data.globalBlackout);
  //     }, (err: HttpErrorResponse) => {
  //       console.log('error', err);
  //     });
  // }

}

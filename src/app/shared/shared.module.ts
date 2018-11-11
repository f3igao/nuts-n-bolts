import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [],
  exports: [HomeComponent]
})
export class SharedModule { }

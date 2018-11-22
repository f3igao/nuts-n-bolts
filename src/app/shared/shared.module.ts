import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [],
  exports: [AboutComponent]
})
export class SharedModule { }

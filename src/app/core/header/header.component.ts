import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NAV_LINKS } from './../../../assets/mock-data/core.mock';
import { INavLink } from 'src/app/models/core.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navLinks: INavLink[] = NAV_LINKS;

  constructor( private router: Router ) {}
}



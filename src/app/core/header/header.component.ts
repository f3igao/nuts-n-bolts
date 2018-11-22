import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    private router: Router
    ) {}

  routeToHome() {
    this.router.navigate(['/']);
  }

  routeToTodo() {
    this.router.navigate(['/todo']);
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }

  routeToRegistration() {
    this.router.navigate(['/register']);
  }

  routeToArmy() {
    this.router.navigate(['/army']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  accessibleExample = true;
  navigationSubscription: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      // subscribe to route change; re-initalise the component on a NavigationEnd event
      if (event instanceof NavigationEnd) {
        this.accessibleExample =
          this.route.snapshot.params.status === 'good' ? true : false;
      }
    });
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  toggleAccessibility(): void {
    this.accessibleExample = !this.accessibleExample;
    const status = this.accessibleExample === true ? '/good' : '/bad';
    this.router.navigate([`/login${status}`]);
  }

  onSubmit() {
    alert('login successful');
  }
}

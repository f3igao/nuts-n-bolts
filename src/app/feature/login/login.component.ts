import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  accessibleExample: boolean;
  navigationSubscription: any;

  constructor(
    private fb: FormBuilder,
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

  ngOnInit(): void{
    this.buildLoginForm();

    this.loginForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  toggleAccessibility(): void {
    this.accessibleExample = !this.accessibleExample;
    const status = this.accessibleExample === true ? '/good' : '/bad';
    this.router.navigate([`/login${status}`]);
  }

  onSubmit() {
    console.log('Submitting:', this.loginForm.controls);
  }
}

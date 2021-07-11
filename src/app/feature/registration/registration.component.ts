import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IOption, IRobot } from '../../models/feature.interface';

import {
  ROBOT_DIVISIONS,
  ROBOT_INTEL_LEVELS,
} from 'src/assets/mock-data/robot.mock';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  accessibleExample = true;
  registrationForm = new FormGroup({});
  registrationValues?: IRobot;
  navigationSubscription: any;
  divisionOptions: IOption[] = ROBOT_DIVISIONS;
  intelOptions: IOption[] = ROBOT_INTEL_LEVELS;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      // subscribe to route change; re-initalise the component on a NavigationEnd event
      if (event instanceof NavigationEnd) {
        this.accessibleExample =
          route.snapshot.params.status === 'good' ? true : false;
      }
    });
  }

  ngOnInit(): void {
    this.buildRegistrationForm();
  }

  buildRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(),
      dob: new FormControl(),
      division: new FormControl(),
      intel: new FormControl(),
      description: new FormControl(),
    });
  }

  handleEnterKey(event: any): void {
    if (event.target.tagName.toLowerCase() !== 'textarea') {
      event.preventDefault();
    }
  }

  toggleAccessibility(): void {
    this.accessibleExample = !this.accessibleExample;
    const status = this.accessibleExample === true ? '/good' : '/bad';
    this.router.navigate([`/register${status}`]);
  }

  onSubmit(): void {
    alert('form submitted');
  }
}

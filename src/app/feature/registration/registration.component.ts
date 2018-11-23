import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IOption, IRobot } from '../../models/feature.interface';

import { ROBOT_CAPABILITIES, ROBOT_DIVISIONS, ROBOT_INTEL_LEVELS } from 'src/assets/mock-data/robot.mock';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
accessibleExample: boolean;
  registrationForm: FormGroup;
  registrationValues: IRobot;
  navigationSubscription: any;
  capabilityOptions: IOption[] =  ROBOT_CAPABILITIES;
  divisionOptions: IOption[] = ROBOT_DIVISIONS;
  intelOptions: IOption[] = ROBOT_INTEL_LEVELS;

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

  ngOnInit(): void {
    this.buildRegistrationForm();
    this.registrationForm.valueChanges.subscribe(value => {
      this.registrationValues = {...value, capabilities: this.updateCapabilities(value.capabilities)};
      console.log(this.registrationValues);
    });
  }

  buildRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      name: '',
      dob: '',
      division: new FormControl(),
      capabilities: new FormArray(this.buildCapabilities()),
      intel: new FormControl(),
      description: new FormControl(),
    });
  }

  buildCapabilities(): FormControl[] {
    return this.capabilityOptions.map((capabilitiy: IOption) => new FormControl(capabilitiy.selected));
  }

  updateCapabilities(selections: boolean[]): string[] {
    return selections
    .filter((selection: boolean) => selection)
    .map((_selection: boolean, i: number) => this.capabilityOptions[i].value);
  }

  handleEnterKey(event): void {
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
    console.log('Submitting:', this.registrationValues);
  }

}




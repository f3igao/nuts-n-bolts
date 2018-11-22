import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IOption, IRobot } from '../../models/robot.interface';

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
  capabilityOptions: IOption[] = [
    { id: 1, name: 'Packaging', value: 'packaging', selected: false},
    { id: 2, name: 'Chess', value: 'chess', selected: false },
    { id: 3, name: 'Drawing', value: 'drawing', selected: false },
    { id: 4, name: 'Music Composition', value: 'music', selected: false },
    { id: 5, name: 'Analyze Emotions', value: 'emotions', selected: false },
    { id: 6, name: 'Telemanipulation', value: 'telemanipulation', selected: false },
    { id: 7, name: 'Welding', value: 'welding', selected: false },
    { id: 8, name: 'Painting', value: 'painting', selected: false },
    { id: 9, name: 'Vacuuming', value: 'vacuuming', selected: false },
    { id: 10, name: 'Poetry', value: 'poetry', selected: false },
    { id: 11, name: 'Make Coffee', value: 'coffee', selected: false },
  ];
  divisionOptions: IOption[] = [
    { id: 1, name: 'Industrial', value: 'industrial' },
    { id: 2, name: 'Domestic / Household', value: 'domestic' },
    { id: 3, name: 'Medical', value: 'medical' },
    { id: 4, name: 'Service', value: 'service' },
    { id: 5, name: 'Military', value: 'military' },
    { id: 6, name: 'Entertainment', value: 'entertainment' },
    { id: 7, name: 'Space', value: 'space' },
  ];
  intelOptions: IOption[] = [
    { id: 1, name: 'Artificial Narrow Intelligence (ANI)', value: 'ani' },
    { id: 2, name: 'Artificial General Intelligence (AGI)', value: 'agi' },
    { id: 3, name: 'Artificial Superintelligence (ASI)', value: 'asi' },
  ];
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
    this.registrationForm = this.fb.group({
      name: '',
      dob: '',
      division: new FormControl(),
      capabilities: new FormArray(this.buildCapabilities()),
      intel: new FormControl(),
      description: new FormControl(),
    });

    this.registrationForm.valueChanges.subscribe(value => {
      this.registrationValues = {...value, capabilities: this.updateCapabilities(value.capabilities)};
      console.log(this.registrationValues);
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

  onSubmit(): void {
    console.log('Submitting:', this.registrationValues);
  }

}




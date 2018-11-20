import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { IOption, IRegistrationFormValues } from './../../models/registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registrationFormValues: IRegistrationFormValues;
  capabilityOptions: IOption[] = [
    { id: 1, name: 'Perform Repetitive Acts', selected: false},
    { id: 2, name: 'Chess', selected: false },
    { id: 3, name: 'Drawing', selected: false },
    { id: 4, name: 'Music Composition', selected: false },
    { id: 5, name: 'Analyze Human Emotions', selected: false },
  ];
  divisionOptions: IOption[] = [
    { id: 1, name: 'Industrial' },
    { id: 2, name: 'Domestic / Household' },
    { id: 3, name: 'Medical' },
    { id: 4, name: 'Service' },
    { id: 5, name: 'Military' },
    { id: 6, name: 'Entertainment' },
    { id: 7, name: 'Space' },
  ];
  intelOptions: IOption[] = [
    { id: 1, name: 'Artificial Narrow Intelligence (ANI)' },
    { id: 2, name: 'Artificial General Intelligence (AGI)' },
    { id: 3, name: 'Artificial Superintelligence (ASI)' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: '',
      dob: '',
      intel: new FormControl(),
      division: new FormControl(),
      capabilities: new FormArray(this.buildCapabilities()),
    });

    this.registrationForm.valueChanges.subscribe(value => {
      const newCapabilities = value.capabilities.map((selected: IOption, i: number) => {
        return {
          id: this.capabilityOptions[i].id,
          name: this.capabilityOptions[i].name,
          selected: selected,
        };
      });

      // const newDivision = value.division ? this.divisionOptions[value.division].name : null;

      // const newIntel = value.intel ? this.intelOptions[value.intel].name : null;

      this.registrationFormValues = {...value, capabilities: newCapabilities};
      console.log(this.registrationFormValues);
    });
  }

  buildCapabilities(): FormControl[] {
    return this.capabilityOptions.map((capabilitiy: IOption) => new FormControl(capabilitiy.selected));
  }


  onSubmit(): void {
    console.log(this.registrationFormValues);
  }

}




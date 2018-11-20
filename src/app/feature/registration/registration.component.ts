import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { IInterest, IRegistrationFormValues } from './../../models/registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registrationFormValues: IRegistrationFormValues;
  interests = [
    { id: 1, name: 'eating', selected: false},
    { id: 2, name: 'dancing', selected: false },
    { id: 3, name: 'sleeping', selected: false },
    { id: 3, name: 'watching TV', selected: false },
    { id: 3, name: 'running', selected: false },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: '',
      dob: '',
      interests: new FormArray(this.buildInterests()),
    });

    this.registrationForm.valueChanges.subscribe(value => {
      const newInt = value.interests.map((selected: IInterest, i: number) => {
        return {
          id: this.interests[i].id,
          name: this.interests[i].name,
          selected: selected,
        };
      });
      this.registrationFormValues = {...value, interests: newInt};
    });
  }

  buildInterests() {
    return this.interests.map((interest: IInterest) => new FormControl(interest.selected));
  }


  onSubmit() {
    console.log(this.registrationFormValues);
  }

}




import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: '',
      email: '',
      password: '',
    });

    this.signupForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
  onSubmit() {
    console.log(this.signupForm.controls);
  }
}

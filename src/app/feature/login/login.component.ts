import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });

    this.loginForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
  onSubmit() {
    console.log(this.loginForm.controls);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistService } from '../regist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hidden: boolean = true;
  alert: boolean = false;
  maxDate = new Date(2006, 1, 1);

  constructor(private fb: FormBuilder, private regist: RegistService) {}

  ngOnInit() {}

  loginForm: FormGroup = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+$')]],
    lname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+$')]],

    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    dob: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    cpassword: ['', [Validators.required]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.regist.saveUsers(this.loginForm.value).subscribe((result) => {
      this.alert = true;
    });
    this.loginForm.reset();
  }

  closeAlert() {
    this.alert = false;
  }
}

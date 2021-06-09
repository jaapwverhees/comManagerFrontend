import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  isSubmitted = false;
  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }
  get formControls(): any {
    return this.authForm.controls;
  }
  signIn(): void {
    this.isSubmitted = true;
    if (this.authForm.invalid){
      return;
    }
    this.authService.login(this.authForm.value)
      .subscribe(result => {
        if (result){
          this.authService.signIn(result);
          this.router.navigateByUrl('/home');
        }});
  }
}

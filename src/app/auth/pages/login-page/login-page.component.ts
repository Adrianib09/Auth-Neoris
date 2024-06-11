import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );
  public myForm: FormGroup = this.fb.group({
    email: ['adrian@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]]
  });
  public loginError: boolean = false;
  
  constructor( private authService: AuthService ) {}

  login(): void {
    if (this.myForm.valid) {
      const { email, password } = this.myForm.value;
      if (!this.authService.login(email, password)) {
        this.loginError = true;
      } else {
        this.loginError = false;
      }
    }
  }
}

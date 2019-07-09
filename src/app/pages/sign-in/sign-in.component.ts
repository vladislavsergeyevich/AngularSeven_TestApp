import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide: boolean = true;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor (public signInService: SignInService, public localStorage: LocalStorageModule) { }

  signIn() {
    this.signInService.getToken().subscribe(data => {
      localStorage.removeItem('token');
      
      if(this.signInService.successOrError()){
        localStorage.token = data.token;
      } 
    });
  }

  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorPasswordMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('minlength') ? 'Password must have more than 6 letters' :
            '';
  }


}
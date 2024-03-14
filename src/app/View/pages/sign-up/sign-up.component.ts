import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
//import { AuthService } from '../../../controller/auth/auth-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(
    private fb: FormBuilder,
    //private authService: AuthService,
    private router: Router
  ) {}

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    //const userDetails = this.signUpForm.value;
    const userEmail = this.signUpForm.get('email')!.value;
    const userName = this.signUpForm.get('name')?.value;
    const userPassword = this.signUpForm.get('password')?.value;

    console.log(userEmail, userPassword, userName);

    // this.authService.signUp(userEmail!, userPassword!).then(() => {
    //   this.router.navigate(['/login']);
    // }).catch((error) => {
    //   console.log(error);
    // });
    // console.log(userName);
    // this.router.navigate(['/login']);
  }
}

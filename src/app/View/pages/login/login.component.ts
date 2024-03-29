import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
//import { AuthService } from '../../../controller/auth/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder , private router: Router) { }

  signInForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    const userEmail = this.signInForm.get('email')!.value;
    const userPassword = this.signInForm.get('password')?.value;

    console.log(userEmail, userPassword);

    // this.authService.login(userEmail!, userPassword!).then(() => {
    //   this.router.navigate(['']);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

}

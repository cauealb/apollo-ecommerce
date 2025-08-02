import { Component, OnInit, } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-and-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-and-register.component.html',
  styleUrl: './login-and-register.component.css',
})
export class LoginAndRegisterComponent implements OnInit {
  formLogin!: FormGroup

  resetForm() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  enterLogin() {
    if(this.formLogin.invalid) return;
    console.log(this.formLogin.value)
    this.resetForm();
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-and-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './login-and-register.component.html',
  styleUrl: './login-and-register.component.css',
})
export class LoginAndRegisterComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  formLogin!: FormGroup;

  resetForm() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  enterLogin() {
    if (this.formLogin.invalid) return;

    if (
      this.formLogin.get('login')?.value !== 'admin' &&
      this.formLogin.get('login')?.value !== 'pitica'
    ) {
      this.toastr.error('Acesso negado', 'Erro');
      return;
    } else if (this.formLogin.get('password')?.value !== '123') {
      this.toastr.error('Acesso negado', 'Erro');
      return;
    }

    this.toastr.success('Acesso permitido', 'Bem-Vindo');
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, ToastrModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private toastr: ToastrService) {}
  
  formPassword!: FormGroup

  ngOnInit() {
    this.resetGroup();
  }

  resetGroup() {
    this.formPassword = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  saveNewPassword() {
    const { user } = this.formPassword.value

    if((this.formPassword.invalid) || (user !== 'admin' && user !== 'pitica')){
      this.toastr.error("Campos inválidos!", "Erro")
      return;
    } 
    
    this.toastr.success("Senha alterada com sucesso!", "Sucesso")
  }
} 

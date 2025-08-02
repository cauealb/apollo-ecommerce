import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginAndRegisterComponent } from './features/Auth/Login-and-Register/login-and-register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginAndRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apollo';
}

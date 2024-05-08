import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private auth = inject(AuthService)
  private router = new Router()

  username = ''
  password = ''
  errorMsg = ''


  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required !'
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required !'
    } else {
      this.errorMsg = ''
      let res = this.auth.login(this.username, this.password)
      if (res === 200) {
        this.router.navigate(['home'])
      } else if (res === 403) {
        this.errorMsg = 'Invalid params or User not found!'
      }
    }
  }

}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = new Router()
  private auth = inject(AuthService)

  goToHome(){
   this.router.navigate(['home'])
  }
  logout(){
   this.auth.logout()
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = new Router()

  login(username: string, password: string) {
    if (username === 'Sunnatillo' && password === '1234') {
      return 200
    } else {
      return 403
    }
  }

  logout(){
   this.router.navigate(['login'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alrtify: AlertifyService, 
    private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alrtify.success('logged in successfully');
    }, error => {
      this.alrtify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alrtify.message('logged out');
    this.router.navigate(['/home']);
  }
}

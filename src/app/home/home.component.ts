import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  constructor(private route: Router,
  private authServ: AuthService) { }
  onLoadServer(id: number) {
  this.route.navigate(['/servers', id, 'edit'],
    {queryParams: {allowEdit: '1'},
    fragment : 'loading'});
  }
  onLogin() {
    this.authServ.logIn();
  }

  onLogout() {
    this.authServ.logOut();
  }
}

import { AuthService } from './../service/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private usersub: Subscription;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
this.usersub= this.authservice.user.subscribe(user=>
  {
    this.isAuthenticated = !user ? false : true;
  });
  }

  ngOnDestroy(){

  }

}

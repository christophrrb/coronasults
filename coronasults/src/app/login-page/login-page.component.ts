import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public username: string = '';
  public pw: string = '';

  constructor(private _loginService: LoginService,
              private _router: Router) { }

  ngOnInit() {
  }

  public getUser() {
    
  }

}

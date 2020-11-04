import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { Router } from '@angular/router';
const { FacebookLogin } = Plugins;


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  async facebook_login() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
    const result = await <FacebookLoginResponse><any>FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
  
  if (result.accessToken) {
    // Login successful.
    console.log(`Facebook access token is ${result.accessToken.token}`);
  } else {
       }
  } 

  googleLogin() {

  }

  guestLogin() {
    this.router.navigate(['/matches'])
  }

}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  onLogin(loginForm: ngForm) {
    console.log(loginForm.value, loginForm.valid);
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { fadeAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   fadeAnimation
  // ]
})
export class AppComponent {
  title = 'angular-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

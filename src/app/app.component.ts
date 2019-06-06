import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  even = false;
  odd = false;

  eventFired(eventData: number) {
    if (eventData % 2 === 0) {

      this.even = true;
      this.odd = false;

    } else {
      this.even = false;
      this.odd = true;
    }
  }

}

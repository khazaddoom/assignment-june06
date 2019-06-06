import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firednumbers: number[] = [];

  eventFired(eventData: number) {
    if (eventData % 2 === 0) {
      this.firednumbers.push(0);

    } else {
      this.firednumbers.push(1);
    }
  }

}

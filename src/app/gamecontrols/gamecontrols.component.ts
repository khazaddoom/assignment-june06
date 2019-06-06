import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrols',
  templateUrl: './gamecontrols.component.html',
  styleUrls: ['./gamecontrols.component.css']
})
export class GamecontrolsComponent implements OnInit {

  interval; // what is this type is this variable has a function??

  @Output() eventFired = new EventEmitter<number>();

  numberTicker = 1;

  constructor() { }

  ngOnInit() {
  }

  onStartGameclick() {

    this.interval = setInterval(() => {
      this.eventFired.emit(this.numberTicker++);
    }, 1000);

  }
}

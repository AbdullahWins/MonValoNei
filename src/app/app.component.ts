import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monVaoNei';
  public mon = "";
  public counter = 0;
  public monKharap() {
    if (this.counter < 3) {
    this.mon = this.mon + "  >_< আজকে আমার মন ভালো নেই >_<  ";
    this.counter = this.counter + 1;
    }
    else {
      this.mon = " -_- তোর মন খারাপের মারে সুদি -_-";
    }
  }
  public reset() {
    this.mon = "";
    this.counter = 0;
  }
}

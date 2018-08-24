import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'custom-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CountdownTimerComponent implements OnInit {

  @Input() count = 60;

  countdown: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.count = Number(this.count);
    this.countdown = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count),
    );
  }

}

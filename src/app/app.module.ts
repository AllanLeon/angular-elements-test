import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    CountdownTimerComponent,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(CountdownTimerComponent, { injector: injector });
    customElements.define('countdown-timer', el);
  }

  ngDoBootstrap() {
    // const el = createCustomElement(CountdownTimerComponent, { injector: this.injector });
    // customElements.define('countdown-timer', el);
  }
}

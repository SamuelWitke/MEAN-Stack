import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular7crud';
  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    switch (event.constructor) {
      case NavigationStart:
        return this._loadingBar.start();
      case NavigationEnd:
        return this._loadingBar.complete();
      case NavigationCancel:
        return this._loadingBar.stop();
      case NavigationError:
        return this._loadingBar.stop();
    }
  }
}

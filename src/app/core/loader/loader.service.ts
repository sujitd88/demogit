/**
 * @author <%= author %>
 * @since <%= createDate %>
 * This service handles an observable subject which accepts a boolean that is responsible to toggling the spinner on the UI. This service is
 * used is app.component to toggle the spinner.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// --------------------------------------- //

@Injectable()
export class LoaderService {
  // An observable to toggle spinner.
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  displayLoader(status) {
    this.loaderStatus.next(status);
  }
}

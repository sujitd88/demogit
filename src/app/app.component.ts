/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class AppComponent
 * 
 */
import { Component, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './core/loader/loader.service';

@Component({
  selector: 'drc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = '';
  public objLoaderStatus: boolean;
  constructor(private loaderService: LoaderService, private changeDetector: ChangeDetectorRef) {
    this.objLoaderStatus = false;
  }

  ngOnInit() {
    this.loaderService.loaderStatus.subscribe((val: boolean) => {
      this.objLoaderStatus = val;
      this.changeDetector.detectChanges(); // If not added causes change in value error.
    });
  }
}

/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  CoreModule
 * This module consists of core application wide services. This module should only be imported in the AppModule. 
 * Use CoreModule.forRoot() to register all the application wide services.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ToastrServiceProvider } from './toastr/toastr.service';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 600,
      preventDuplicates: true,
      closeButton: true,
      enableHtml: true
    })
  ],
  declarations: [],
  exports:[],
  providers: [ToastrServiceProvider]
})
export class CoreModule { }

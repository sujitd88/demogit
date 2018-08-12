/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  AppModule
 * This is the root module through which the application bootstraps.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TopbarComponent } from './core/navbar/topbar/topbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderService } from './core/loader/loader.service';
import { UserModule } from './user/user.module';
import { BreadcrumbComponent } from './shared/components';

const appRoutes: Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    UserModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent],
})

export class AppModule { }

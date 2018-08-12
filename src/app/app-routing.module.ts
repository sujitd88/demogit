/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class AppRoutingModule
 * This is the root routing module through which the application wide routing is configured. This module provides configuration
 * for all the lazy loaded routes. Note that RouterModule's forRoot() is configured only in this root routing module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// --------------------------------------- //

// Configuration of application wide lazy & eagerly loaded routes.
const APP_ROUTES: Routes = [
  {
    path: '', 
    redirectTo: '/', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

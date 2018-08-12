import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { editComponent } from './edit/edit.component';
import { listComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: {
      breadcrumb: "Users"
    },
    children: [ 
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      { 
        path: '',
        component: listComponent,
        data: {
          breadcrumb: ""
        }
      },
      {
        path: 'edit/:id',
        component: editComponent,
        data: {
          breadcrumb: "Edit"
        }
      }
    ]
  } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
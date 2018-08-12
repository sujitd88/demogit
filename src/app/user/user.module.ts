import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { addComponent } from './add/add.component';
import { editComponent } from './edit/edit.component';
import { listComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [UserComponent, addComponent, editComponent, listComponent],
  providers:[UserService],
  entryComponents: [addComponent]
})
export class UserModule { }

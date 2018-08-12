import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import * as _ from 'underscore';
import { SearchPipe } from '../shared/pipes';
import { addComponent } from './add/add.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  modalRef: BsModalRef;
  showAdd: boolean= true;

  constructor(private modalService: BsModalService, private userservice: UserService,) {}
  
  ngOnInit() {}
  
  openModal() {
    const initialState = {
        title: 'Add User',
    };
    this.modalRef = this.modalService.show(addComponent, { initialState });
  }
}

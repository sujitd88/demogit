import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { LoaderService } from '../../core/loader/loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchPipe } from '../../shared/pipes';
import { addComponent } from '../add/add.component';
import { ToastrServiceProvider } from '../../core/toastr/toastr.service';
import * as _ from 'underscore';
@Component({
    selector: 'list-user',
    templateUrl: './list.component.html',
    providers: [SearchPipe]
})

export class listComponent implements OnInit {
    user: User[];
    public search: string;
    
    // pager object
    pageSize: number = 3;

    direction: number;
    column: any;
    isDesc: boolean;
    users: User[];
    records: User[];
    filteredItems: User[];
    recordCount: number;
    constructor(private userservice: UserService, private loader: LoaderService,
        private SearchPipe: SearchPipe, private _toast: ToastrServiceProvider) {
        this.userservice.newUserData$.subscribe(newUser => {
            this.onNewUserAdd(newUser);
        })
    }

    onNewUserAdd(user: User) {
        let newUserData = Object.assign({}, user);
        this.users.push(newUserData);
        this.records.push(newUserData);
        this.filteredItems = this.SearchPipe.transform(this.records, this.search);
    }

    ngOnInit() {
        this.loader.displayLoader(true);
        this.userservice.gerUser().subscribe((users) => {
            this.loader.displayLoader(false);
            this.records = users;
            this.filteredItems = this.SearchPipe.transform(this.records, this.search);
            this.users = users;
            this.recordCount = this.records.length;
            // initialize to page 1
            this.isDesc = false;
            this.direction = this.isDesc ? -1 : 1;
            this.column = 'FirstName';
            this.onSetPage(1);
        },
            (error) => {
                this.loader.displayLoader(false);
            }, )
    }

    sort(property) {
        if (this.column == property) {
            this.isDesc = !this.isDesc; //change the direction    
        } else {
            this.isDesc = false;
        }
        this.column = property;
        this.direction = this.isDesc ? -1 : 1;
    };

    onSetPage(page: any) {
        let startIndex = (page - 1) * this.pageSize;
        this.users = _.take(_.rest(this.filteredItems, startIndex), this.pageSize);
    }

    onSearchTermChanged(searchTerm: string) {
        this.search = searchTerm;
        this.filteredItems = this.SearchPipe.transform(this.records, this.search);
        this.onSetPage(1);
    }
    onDelete(id:number){
        if(confirm('Delete this item?'))
        {
            this.userservice.deleteUser(id).subscribe(x=>{
            this.userservice.gerUser().subscribe((users)=>{
            this.users=users;        
             })
           })
           this._toast.success('Delete sucessfully', 'Success');
        }
        }
}
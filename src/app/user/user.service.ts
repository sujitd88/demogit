import { Injectable } from '@angular/core';
import { Http ,Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private newIsInEdit: boolean;
  constructor(public http: Http) {}

  //NEW ROLE DATA TO BE PUSHED IN LIST - OBSERVABLE.
  private newUserDataSource = new Subject<User>();
  newUserData$ = this.newUserDataSource.asObservable();

  sendNewUserData(userData: User) {
    console.log(userData);
    this.newUserDataSource.next(userData);
  }

  getNewUserData(): Observable<User> {
    return this.newUserData$;
  }

  gerUser() {
    return this.http.get('http://localhost:2222/users')
      .map(res => res.json());
  }

  addUser(user: User) {
    return this.http.post('http://localhost:2222/users', user).map((res) => {
      return res
    })
  }
  deleteUser(id:number){
    return this.http.delete('http://localhost:2222/users/' + id)
    .map(res=>res.json());
  }
  updateUser(users,id){
    return this.http.put('http://localhost:2222/users/'+id, users)
    .map(res =>res.json());
  }
}

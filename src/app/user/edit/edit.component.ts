import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { LoaderService } from '../../core/loader/loader.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrServiceProvider } from '../../core/toastr/toastr.service';
import { Http, Response, Headers } from '@angular/http';
@Component({
    selector: 'edit-user',
    templateUrl: './edit.component.html'
})

export class editComponent implements OnInit {
    userObj:object =[];
    id:number;
    data:object=[];
    exist=false;
    users=[];
    user: User;
    userEditForm: FormGroup;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(
        private _toast: ToastrServiceProvider,
        private userservice: UserService,
        private loader: LoaderService,
        private _fb: FormBuilder,
        private router: Router,
        private route:ActivatedRoute,
        private http:Http
    ) { }

    ngOnInit() {
        //INITIALIZE FORM FOR FIRST TIME.
        this.userEditForm = this.buildUser(this.emptyUser());
        this.route.params.subscribe(params =>{
            this.id= +params['id'];
          });
          this.userservice.gerUser().subscribe(
            (res) => {
              this.users = res;
              for(var i=0;i< this.users.length;i++){
                if(parseInt(this.users[i].id) === this.id){
                  this.exist=true;
                  this.users=this.users[i];
                  break;
                }
                else{
                  this.exist=false;
                }
              }
            }
          )
    }

    /**
   * BUILD FORM GROUP FOR ROLE DATA.
   * @param data 
   */
    buildUser(data: User): FormGroup {
        return this._fb.group({
            FirstName: [data.FirstName, [Validators.required]],
            LastName: [data.LastName, [Validators.required]],
            Email: [data.Email, [Validators.required]],
            ContactNumber: [data.ContactNumber, [Validators.required]]
        })
    }

    /**
   * TO GET EMPTY ROLE DATA.
   */
    emptyUser(): User {
        return {
            FirstName: null,
            LastName: null,
            Email: null,
            ContactNumber: null,
            Date: null,
            Id: null
        }
    }

    // updateUser() {
    //     let newUserData = this.userAddForm.value;
    //     let validate = this.validateAllFormFields(this.userAddForm);
    //     if (validate.result) {
    //         this.userservice.updateUser(newUserData).subscribe(
    //             response => {
    //                 if (response.status) {
    //                     this._toast.success('User Update', 'Success');
    //                     this.userservice.sendNewUserData(newUserData);
    //                 } else {
    //                     console.log('error');
    //                     //this._toast.error(response.errors, 'Error');
    //                 }
    //             }, err => {
    //                 this._toast.error(err.errors, 'Error');
    //             });
    //         this.clearForm();
    //     } else {
    //         this._toast.error(validate.errors, 'Error')
    //     }
    // }

    /**
     * CLEAR FORM DATA.
     */
    clearForm() {
        this.userEditForm.reset();
    }
    /**
   * FORM VALIDATION
   * @param formGroup 
   */
    validateAllFormFields(formGroup: FormGroup) {
        let flag = true;
        let errors = [];

        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                if (control.invalid) {
                    flag = false;
                    errors.push(`${field} field is invalid.`);
                }
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });

        return { result: flag, errors: errors };
    }

    onCancel()  {
        this.router.navigate(['../users']);
    }
    updateUser(user){
        let newUserData = this.userEditForm.value;
        let validate = this.validateAllFormFields(this.userEditForm);
        if(validate.result){
        this.userObj={
          "FirstName":user.FirstName,
          "LastName":user.LastName,
          "Email":user.Email,
          "ContactNumber":user.ContactNumber,
        };
        const url = "http://localhost:2222/users/" + (this.id);
        this.http.put(url,JSON.stringify(this.userObj), {headers:this.headers})
        .toPromise()
        .then(()=>{
          this._toast.success('Record Updated Successfully', 'Success');  
          this.router.navigate(['/users']);
        })
        this.clearForm();
    } else {
        this._toast.error(validate.errors, 'Error')
      }      
      }
    
}
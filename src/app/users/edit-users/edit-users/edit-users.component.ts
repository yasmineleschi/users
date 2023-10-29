import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services-user/user.service';
import { FormBuilder } from '@angular/forms';
import { User } from '../../model-user/user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : UserService,
    private formBuilder : FormBuilder,
    private router : Router){}

  user? : User;

  editUser = this.formBuilder.group({
    email : '',
    password : '',
    name : ''
  });




  Edituser = ()=>{
    const values = this.editUser.value;
    this.service.Edituser(
      new User(this.user!.id, values.email!, values.password!, values.name!)
    ).subscribe(
      user => this.router.navigate(['/users'])
    );
  }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{

        this.service.getUserById(+params['id']).subscribe(
          user=> {
            this.user = user;

            this.editUser.setValue({
              email : this.user.email,
              password : this.user.password,
              name : this.user.name
            })
          }
        )
      }
    )

  }

}



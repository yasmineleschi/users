import { Component } from '@angular/core';
import { UserService } from '../../services-user/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  constructor(
    private service : UserService,
    private router : Router
    ){}


  addUser = (f1 : NgForm)=>{
    console.log(f1);
    const newUser = {
      email : f1.value.email,
      password : f1.value.password,
      name : f1.value.name
     }
    this.service.addUser(newUser).subscribe(
      user => this.router.navigate(['/users'])
    );


  }

}


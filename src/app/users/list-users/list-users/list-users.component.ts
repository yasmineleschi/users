import { Component } from '@angular/core';
import { User } from '../../model-user/user';
import { Subscription } from 'rxjs';
import { UserService } from '../../services-user/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users? : User[];
  subscription? : Subscription;

  constructor(private service : UserService){}

  deleteUser = (id : number)=>{
    this.service.deleteUser(id).subscribe(
      obj=>this.users = this.users?.filter(
        user=>user.id !== id
      ),
      error=>console.log(error),
      ()=>console.log('terminé')
    )

  }
  ngOnInit(): void {
    this.service.getUsers().subscribe(
      users => this.users = users
    );

  }


}


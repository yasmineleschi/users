import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { AddUsersComponent } from './add-users/add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services-user/user.service';


@NgModule({
  declarations: [

    AddUsersComponent,
    EditUsersComponent,
    ListUsersComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [UserService]
})
export class UsersModule { }

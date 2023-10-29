import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : '', redirectTo : 'home', pathMatch:'full'},
  {
    path: 'books',
    loadChildren: () => import('./books/books.module')
      .then(m => m.BooksModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

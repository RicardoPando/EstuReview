import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CreateEditComponent } from './component/user/create-edit/create-edit.component';

const routes: Routes = [
  {
  path: 'users', component:UserComponent, children:[
  {
    path:'nuevo', component:CreateEditComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';
import { RegistroColegioComponent } from './components/colegio/registro-colegio/registro-colegio.component';
import { UserComponent } from './components/user/user.component';
import { CreateEditComponent } from './components/user/create-edit/create-edit.component';

const routes: Routes = [
  {
    path: 'colegios', component:ColegioComponent, children: [
      {
      path: 'nuevo', component: RegistroColegioComponent
      },
      {
        path: 'edicion/:id', component: RegistroColegioComponent
      }
    ],
  },
  {
    path: 'users', component:UserComponent, children:[
      {
        path:'nuevo', component:CreateEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

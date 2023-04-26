import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColegioComponent } from './components/colegio/colegio.component';
import { ListColegioComponent } from './components/colegio/list-colegio/list-colegio.component';
import { RegistroColegioComponent } from './components/colegio/registro-colegio/registro-colegio.component';

import { HttpClientModule} from '@angular/common/http';//add mano
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from './components/user/user.component';
import { UserListarComponent } from './components/user/user-listar/user-listar.component';
import { CreateEditComponent } from './components/user/create-edit/create-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Navbar2Component } from './components/navbar/navbar2/navbar2.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    ColegioComponent,
    ListColegioComponent,
    RegistroColegioComponent,
    UserComponent,
    UserListarComponent,
    CreateEditComponent,
    NavbarComponent,
    Navbar2Component,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add mano
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule, 
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{ MatTableDataSource } from'@angular/material/table';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserService {
private url = `${baseUrl}/users`;
private listaCambio = new Subject<User[]>();
  constructor(private http: HttpClient) { }
list():Observable<any>{
console.log(this.url);
return this.http.get<User[]> (this.url);
}

insert(user:User){
  return this.http.post(this.url,user);
}
setList(listaNueva: User[]){
  this.listaCambio.next(listaNueva);
}
getlist(){
  this.listaCambio.asObservable();
}
}


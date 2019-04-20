import { Injectable } from '@angular/core';
import { User } from '../_model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MyUser } from '../_model/myUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

// selectedUser: User = {
//   fullName: '',
//   email: '',
//   password: ''
// };

constructor(private http: HttpClient) { }
  registerUser(user: any) {
    return this.http.post('http://localhost:3000/api/register', user);
  }
}

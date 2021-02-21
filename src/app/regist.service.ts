import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }
  saveUsers(data: any) {
    // console.warn(data);
    return this.http.post(this.url, data);
  }
  deleteUsers(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

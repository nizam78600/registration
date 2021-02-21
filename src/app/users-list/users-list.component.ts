import { Component, OnInit } from '@angular/core';
import { RegistService } from '../regist.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private regist: RegistService) {}
  users: any = [];

  ngOnInit(): void {
    this.regist.getUsers().subscribe((result) => {
      this.users = result;
    });
  }
  deleteUsers(user: any) {
    this.users.splice(user - 1, 1);

    this.regist.deleteUsers(user).subscribe((result) => {
      console.warn(result);
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  users: any[] = [];

  constructor( private userService: UsersService, private router: Router ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userService.getUsers();
  }

  addUser(): void {
    this.router.navigate(['dashboard/users/form']);
  }

  editUser(user: any): void {
    this.router.navigate(['dashboard/users/form', user.id]);
  }

  deleteUser(userId: number): void {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.userService.deleteUser(userId);
      this.loadUsers();
    }
  }
}

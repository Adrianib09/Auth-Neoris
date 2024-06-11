import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private storageKey = 'users';

  constructor() { }

  getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(user: any): void {
    const users = this.getUsers();
    const index = users.findIndex((u: any) => u.id === user.id);
    if (index !== -1) {
      users[index] = user;
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }

  deleteUser(userId: number): void {
    const users = this.getUsers();
    const filteredUsers = users.filter((user: any) => user.id !== userId);
    localStorage.setItem(this.storageKey, JSON.stringify(filteredUsers));
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from './auth/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'neorisAuth';

  ngOnInit() {
    this.initializeUsers();
  }

  initializeUsers() {
    // Se inicializan usuarios con el objetivo de facilitar las pruebas
    const users: User[] = [
      {
        id: 1,
        name: 'Adrian Izaguirre',
        email: 'adrian@gmail.com',
        password: '123456',
        role: 'Administrator',
        dateAdded: new Date().toISOString(),
        profileImage: 'assets/images/User1.png'
      },
      {
        id: 2,
        name: 'Jesus Baez',
        email: 'jesus@gmail.com',
        password: '654321',
        role: 'Receptionist',
        dateAdded: new Date().toISOString(),
        profileImage: 'assets/images/User2.png'
      }
    ];

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}

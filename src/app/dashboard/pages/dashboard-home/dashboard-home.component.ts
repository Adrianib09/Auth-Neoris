import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent implements OnInit {
  currentUser = { name: '' };
  totalUsers = 0;
  pendingTasks = 0;
  isBouncing = false;

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.totalUsers = users.length;

    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}

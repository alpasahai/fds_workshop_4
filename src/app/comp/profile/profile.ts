import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface StoredUser {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
}

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile implements OnInit {
  currentUser: StoredUser | null = null;
  saved = signal(false);

  ngOnInit() {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.currentUser = JSON.parse(stored);
    }
  }

  saveProfile() {
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 2000);
    }
  }
}

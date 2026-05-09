import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = signal<string>('');
  username = signal<string>('');
  email = signal<string>('');

  password = signal<string>('');
  confirmPassword = signal<string>('');

  errorMessage = signal<string>('');
  loadign = signal<boolean>(false);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  register(): void {
    this.errorMessage.set('');

    if (this.password() !== this.confirmPassword()) {
      this.errorMessage.set('Passwords do not match');
      return;
    }

    this.loadign.set(true);
    
    this.authService.register({
      name: this.name(),
      username: this.username(),
      email: this.email(),
      password: this.password(),
    }).subscribe({
      next: () => {
        this.loadign.set(false);
        this.router.navigate(['/login']);
      },

      error: (err) => {
        this.errorMessage.set(err.error?.message || 'registration error');
        this.loadign.set(false);
      },
    })
  }
}

import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { User } from 'src/shared/models/user';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { DataStoreService } from 'src/shared/services/data-store/data-store.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    FormsModule,
    MatPasswordStrengthModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;
  user = new User();

  constructor(
    private authService: AuthService,
    private dataStoreService: DataStoreService,
    private router: Router
  ) {}

  logIn(loginForm: NgForm): void {
    this.loading = true;
    this.authService.logIn(loginForm.value).subscribe({
      next: (response) => {
        this.httpSuccess(response);
      },
      error: () => {
        this.loading = false;
        this.dataStoreService.user = { email: '', password: '' };
      },
    });
  }

  httpSuccess(response: User): void {
    this.loading = false;
    this.dataStoreService.user = response;
    this.router.navigate(['/home']);
  }
}

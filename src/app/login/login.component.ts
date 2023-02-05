import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/shared/models/user';
import { AuthService } from 'src/shared/services/auth/auth.service';

import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loading = false;
  user = new User();

  constructor(private authService: AuthService) {}

  logIn(loginForm: NgForm): void {
    this.loading = true;
    this.authService.logIn(loginForm.value).subscribe({
      next: (response) => {
        debugger;
        console.log(response);
        //this.httpSuccess()
      },
      error: () => {
        // this.httpError
      },
    });

    // let payload = `username=${userName}&password=${password}&grant_type=password`;
    // let options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   }),
    // };

    // this.postMandateToken(payload, options).subscribe({
    //   next: (mandateToken) => {
    //     this.currentUser.mandatesToken = mandateToken;
    //   },
    //   error: () => {
    //     // retry
    //   },
    // });
    // return this.http
    //   .post<any>(url, payload, options)
    //   .pipe(catchError(this.handleError));
    // this.authService(loginForm.controls.value);
    // this.sub.add(
    //   this.authService.logIn(userName, password).subscribe({
    //     next: (stsData) => {
    //       this.authService.currentUser.userName = stsData.userName;
    //       this.authService.currentUser.accessToken = stsData.access_token;
    //       this.router.navigate(['/client-search']);
    //       this.error = false;
    //       this.loading = false;
    //     },
    //     error: (error) => {
    //       this.error = true;
    //       this.loading = false;
    //     },
    //   })
    // );
  }
}

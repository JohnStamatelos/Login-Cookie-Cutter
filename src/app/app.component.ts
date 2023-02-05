import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/shared/services/data-store/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  title = 'Login-Cookie-Cutter';
  isLoggedIn!: boolean;

  constructor(
    private dataStoreService: DataStoreService,
    private router: Router
  ) {}

  ngDoCheck(): void {
    this.isLoggedIn = this.dataStoreService.user?.email ? true : false;
  }

  logout(): void {
    this.dataStoreService.user.email = '';
    this.router.navigate(['/login']);
  }
}

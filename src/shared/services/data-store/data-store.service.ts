import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  private _user!: User;

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }
}

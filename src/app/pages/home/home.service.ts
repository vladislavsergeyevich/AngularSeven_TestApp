import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsersPage } from 'src/app/shared/interfaces/UsersPage';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from 'src/app/shared/interfaces/User';
import { API_URL_USER } from '../../shared/config';
import { map } from 'rxjs/operators';



@Injectable()
export class HomeService {
  avatar: string;

  constructor(public http: HttpClient) { }

  getUsers(): Observable<IUser[]>[] {
    const pages: number[] = [1, 2, 3, 4];
    
    return pages.map<Observable<IUser[]>>(page => {
      return this.http.get<IUsersPage>(`${API_URL_USER}${page}`)
        .pipe(
          map(res => res.data)
        );
    });
  };

  setAvatar(avatar): void {
    this.avatar = avatar;
  }

}

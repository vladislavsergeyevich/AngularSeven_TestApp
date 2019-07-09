import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';
import { IToken } from 'src/app/shared/interfaces/Token';

@Injectable()
export class SignInService {

  constructor(public http: HttpClient) { }

  getToken(): Observable<IToken> {
    const options: object = {
      body: {
        email: "sydney@fife",
        password: "pistol"
      }
    };

    return this.http.request<IToken>('POST', API_URL, options);
  }

  successOrError(): boolean {
    const randomNumber = Math.floor(Math.random() * 100) % 2;
    return randomNumber == 0;
  }
}
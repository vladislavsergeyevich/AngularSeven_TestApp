import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { IUser } from 'src/app/shared/interfaces/User';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  users: IUser[];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'avatar'];
  
  constructor(public homeService: HomeService) { }
  
  ngOnInit(): void {
    forkJoin(this.homeService.getUsers())
    .subscribe(data => {
      this.users = data.flat() ; 
    });
  }
  
  setAvatar = (avatar) => this.homeService.setAvatar(avatar);

}
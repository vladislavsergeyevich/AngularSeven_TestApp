import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: 'user-profile.component.html',
    styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent{

    id: string;
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(private route: ActivatedRoute, public homeService: HomeService ) { }

    ngDoCheck() {
        const params = this.route.snapshot.firstChild ? this.route.snapshot.firstChild.params : {};

        this.id = params.id;
        this.first_name = params.first_name;
        this.last_name = params.last_name;
        this.avatar = this.homeService.avatar;
    }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { UserProfileComponent } from './userProfile/user-profile.component';
import { MatTableModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        RouterModule,
        MatCardModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {}